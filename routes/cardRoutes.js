const express = require("express");
const router = express.Router();

const tarotCards = [
  {
    name: "The Fool",
    description: "A new chapter with clean hands: curiosity, humor, and the courage to begin before you feel qualified. The cliff edge is less a warning than a reminder—stay present, travel light, and learn by living.\n\nQuestions:\n- Where am I protecting an image instead of trying the thing?\n- What is one playful, honest step toward my becoming?\n\nPractice: Do one small experiment today (5–15 minutes). Keep it imperfect and real; record what you learned.\n\nShadow: Escaping responsibility, chasing novelty, or refusing to look where you’re going.\n\nCorrespondences: Letter: Aleph; Path: 11; Attribution: Air",
    image: "/tarotdeck/thefool.jpeg",
  },
  {
    name: "The Magician",
    description: "Focused agency: the ability to gather your tools—attention, speech, skill, and intention—and channel them into a single act. This is the moment you realize you can participate in shaping your life.\n\nQuestions:\n- What do I already have in my hands that I keep overlooking?\n- What outcome do I want to embody—and what is the next concrete action?\n\nPractice: Name one intention. Remove one distraction. Take one decisive step while your attention is still gathered.\n\nShadow: Trickster mode: manipulation, grand promises, or trying to control outcomes instead of doing the work.\n\nCorrespondences: Letter: Beth; Path: 12; Attribution: Mercury",
    image: "/tarotdeck/themagician.jpeg",
  },
  {
    name: "The High Priestess",
    description: "The threshold of inner knowing: silence, dreams, symbols, and the wisdom that appears when you stop forcing clarity. She invites you to listen beneath words and wait for what is true to reveal itself.\n\nQuestions:\n- What do I already know, but avoid admitting?\n- What becomes clear if I sit with the question instead of solving it?\n\nPractice: Take 10 minutes of quiet. Journal the first honest answer that arises, without editing.\n\nShadow: Withholding, passivity, or confusing mystery with avoidance.\n\nCorrespondences: Letter: Gimel; Path: 13; Attribution: Moon",
    image: "/tarotdeck/thehighpriestess.jpeg",
  },
  {
    name: "The Empress",
    description: "Life that grows: nourishment, creativity, sensual presence, and the capacity to bring something into form through care. She asks for patience—tend the soil, not just the outcome.\n\nQuestions:\n- What needs consistent care in my life right now?\n- Where can I soften and let growth happen on its own time?\n\nPractice: Choose one thing to nurture daily for a week—body, home, art, relationship, or craft.\n\nShadow: Overindulgence, smothering, or mistaking comfort for true abundance.\n\nCorrespondences: Letter: Daleth; Path: 14; Attribution: Venus",
    image: "/tarotdeck/theempress.jpeg",
  },
  {
    name: "The Emperor",
    description: "Sovereignty and structure: boundaries, responsibility, and the steady courage to lead your own life. He builds a container strong enough to hold desire, conflict, and long-term purpose.\n\nQuestions:\n- What principle or boundary would make my life more trustworthy?\n- Where am I avoiding responsibility that would actually free me?\n\nPractice: Set one clear boundary (time, habit, relationship). Enforce it gently and consistently.\n\nShadow: Rigidity, domination, or hiding fear behind control.\n\nCorrespondences: Letter: Tzaddi; Path: 28; Attribution: Aries",
    image: "/tarotdeck/theemperor.jpeg",
  },
  {
    name: "The Hierophant",
    description: "Tradition and initiation: learning from proven paths, wise mentors, and shared ethics. This is the part of you that seeks meaning through practice—not novelty for its own sake.\n\nQuestions:\n- What discipline or vow would deepen my integrity?\n- Whose guidance is worth earning—and what is the cost of admission?\n\nPractice: Commit to a simple daily practice (study, prayer, breath, craft). Keep it small, keep it true.\n\nShadow: Blind conformity, spiritual posturing, or outsourcing your conscience.\n\nCorrespondences: Letter: Vav; Path: 16; Attribution: Taurus",
    image: "/tarotdeck/thehierophant.jpeg",
  },
  {
    name: "The Lovers",
    description: "Union and choice: the meeting of opposites and the demand for alignment. This card is less about romance than about choosing what you will stand for—and letting your life reflect it.\n\nQuestions:\n- What choice would make me more whole, even if it’s hard?\n- Where do my actions contradict my values?\n\nPractice: Write your top 3 values for this season. Make one decision today that clearly honors them.\n\nShadow: Indecision, splitting yourself, or choosing approval over truth.\n\nCorrespondences: Letter: Zayin; Path: 17; Attribution: Gemini",
    image: "/tarotdeck/TheLovers.jpg",
  },
  {
    name: "The Chariot",
    description: "Directed will: learning to steer opposing forces—desire and discipline, fear and ambition—toward one destination. Victory comes from coherence, not force.\n\nQuestions:\n- What am I trying to drive toward—and why?\n- Where do I need more self-mastery instead of more effort?\n\nPractice: Define a single goal for the next 7 days. Break it into daily steps and track completion.\n\nShadow: Overcontrol, burnout, or proving yourself through constant conquest.\n\nCorrespondences: Letter: Cheth; Path: 18; Attribution: Cancer",
    image: "/tarotdeck/thechariot.jpeg",
  },
  {
    name: "Strength",
    description: "Gentle power: courage that meets instinct with compassion. The lion is not defeated; it is befriended. True strength is the ability to stay open-hearted under pressure.\n\nQuestions:\n- What part of me am I trying to suppress instead of integrate?\n- Where can I respond with patience rather than force?\n\nPractice: When triggered, slow your breath and soften your body. Choose the smallest kind action you can still respect.\n\nShadow: Repression, performative toughness, or losing yourself in rage or shame.\n\nCorrespondences: Letter: Teth; Path: 19; Attribution: Leo",
    image: "/tarotdeck/thestrength.jpeg",
  },
  {
    name: "The Hermit",
    description: "Solitude with purpose: the inner lamp that guides you when external noise goes quiet. This is the season of honest self-audit and simplifying back to what matters.\n\nQuestions:\n- What truth becomes obvious when I stop performing?\n- What guidance arises when I trust my own experience?\n\nPractice: Take a brief retreat (even one evening). Remove inputs and ask: “What is essential?”\n\nShadow: Isolation, cynicism, or using solitude to avoid life.\n\nCorrespondences: Letter: Yod; Path: 20; Attribution: Virgo",
    image: "/tarotdeck/thehermit.jpeg",
  },
  {
    name: "Wheel of Fortune",
    description: "Cycles and turning points: what rises falls, what falls rises. The invitation is humility, adaptability, and learning the lesson each season brings—so you can meet change without panic.\n\nQuestions:\n- Where am I resisting the natural cycle I’m in?\n- What pattern keeps repeating until I learn it?\n\nPractice: List what you can control, what you can influence, and what you must release. Act on the first two; surrender the third.\n\nShadow: Gambling with your life, fatalism, or blaming fate for what is actually choice.\n\nCorrespondences: Letter: Kaph; Path: 21; Attribution: Jupiter",
    image: "/tarotdeck/wheeloffortune.jpeg",
  },
  {
    name: "Justice",
    description: "Truth in balance: clear seeing, fair consequence, and the integrity to face what your choices create. This is the work of alignment—inner and outer—so your life becomes trustworthy.\n\nQuestions:\n- What is the most honest account of what happened?\n- What repair or boundary would restore balance?\n\nPractice: Make one clean correction: apologize, repay, clarify, document, or decide. Keep it simple and precise.\n\nShadow: Self-righteousness, avoidance of accountability, or punishing yourself instead of learning.\n\nCorrespondences: Letter: Lamed; Path: 22; Attribution: Libra",
    image: "/tarotdeck/justice.jpeg",
  },
  {
    name: "The Hanged Man",
    description: "A sacred pause: surrendering the old viewpoint so a deeper one can emerge. What looks like stagnation can be voluntary devotion—choosing to see differently before acting.\n\nQuestions:\n- What am I clinging to that keeps me upside down?\n- What becomes possible if I stop trying to force movement?\n\nPractice: Choose one situation to ‘hold’ for 48 hours without fixing. Observe, reframe, and wait for the new angle.\n\nShadow: Martyrdom, procrastination dressed as spirituality, or refusing necessary action.\n\nCorrespondences: Letter: Mem; Path: 23; Attribution: Water",
    image: "/tarotdeck/thehangedman.jpeg",
  },
  {
    name: "Death",
    description: "Endings that free life: shedding a skin, closing a chapter, making space for what wants to be born next. Transformation is rarely comfortable, but it is honest.\n\nQuestions:\n- What is already over, even if I haven’t admitted it?\n- What identity am I ready to outgrow?\n\nPractice: Release one attachment: delete, donate, end a habit, have the conversation, close the loop.\n\nShadow: Clinging, fear of change, or dramatizing endings instead of completing them.\n\nCorrespondences: Letter: Nun; Path: 24; Attribution: Scorpio",
    image: "/tarotdeck/death.jpeg",
  },
  {
    name: "Temperance",
    description: "Integration and alchemy: blending opposites into a living third thing. This is the slow art of calibration—finding the proportion that makes you stable, creative, and whole.\n\nQuestions:\n- What extremes am I swinging between?\n- What balanced ‘middle path’ would actually sustain me?\n\nPractice: Pick two qualities you need (e.g., rest + rigor). Design one daily routine that honors both.\n\nShadow: Avoiding commitment by staying ‘in between,’ or numbing tension instead of metabolizing it.\n\nCorrespondences: Letter: Samekh; Path: 25; Attribution: Sagittarius",
    image: "/tarotdeck/temperance.jpeg",
  },
  {
    name: "The Devil",
    description: "Bondage and shadow: the places you trade freedom for comfort—addictions, compulsions, shame, and false promises. The chains are often loose; the work is to see them and choose differently.\n\nQuestions:\n- What has me hooked right now—and what need is it trying to meet?\n- What would freedom look like in one small behavior?\n\nPractice: Name the pattern. Reduce one cue and add one support (accountability, environment change, honest confession).\n\nShadow: Blaming darkness, indulging helplessness, or mistaking intensity for truth.\n\nCorrespondences: Letter: Ayin; Path: 26; Attribution: Capricorn",
    image: "/tarotdeck/thedevil.jpeg",
  },
  {
    name: "The Tower",
    description: "Revelation through collapse: structures built on denial break so reality can return. It’s not punishment—it’s the cost of living in truth. What falls was never stable.\n\nQuestions:\n- What ‘certainty’ am I defending that is already cracking?\n- What would I build if I stopped lying to myself?\n\nPractice: Tell one truth you’ve been avoiding. Then take one practical step to rebuild on solid ground.\n\nShadow: Catastrophizing, scorched-earth reactions, or refusing the lesson after the shock.\n\nCorrespondences: Letter: Peh; Path: 27; Attribution: Mars",
    image: "/tarotdeck/thetower.jpeg",
  },
  {
    name: "The Star",
    description: "Hope that heals: renewal after upheaval, a quiet guiding light, the willingness to be honest and tender again. This is the long-range orientation toward meaning, not the quick fix.\n\nQuestions:\n- What restores my faith in life when I’m depleted?\n- Where can I be gently consistent instead of intense?\n\nPractice: Do one nourishing ritual nightly for a week (water, breath, gratitude, stargazing, gentle movement).\n\nShadow: Naïve optimism, spiritual bypassing, or refusing the work while waiting for rescue.\n\nCorrespondences: Letter: He; Path: 15; Attribution: Aquarius",
    image: "/tarotdeck/thestar.jpeg",
  },
  {
    name: "The Moon",
    description: "The night path: dreams, fear, intuition, and the confusing territory between reality and projection. The task is to move slowly, test your assumptions, and stay curious about what’s hidden.\n\nQuestions:\n- What am I projecting onto this situation?\n- What do my dreams/feelings point to beneath the story?\n\nPractice: Track one recurring emotion or dream symbol for a week. Look for patterns; avoid impulsive conclusions.\n\nShadow: Paranoia, self-deception, or letting anxiety drive the wheel.\n\nCorrespondences: Letter: Qoph; Path: 29; Attribution: Pisces",
    image: "/tarotdeck/themoon.jpeg",
  },
  {
    name: "The Sun",
    description: "Clarity and vitality: warmth, play, truth in daylight, and the confidence to be seen. Here, simplicity is wisdom—what’s alive is obvious, and joy becomes a practice.\n\nQuestions:\n- Where can I be more honest and direct?\n- What part of me wants to come out into the open?\n\nPractice: Do one visible act of self-expression today. Keep it simple; let it be joyful.\n\nShadow: Ego inflation, forcing positivity, or burning yourself out on constant exposure.\n\nCorrespondences: Letter: Resh; Path: 30; Attribution: Sun",
    image: "/tarotdeck/thesun.jpeg",
  },
  {
    name: "Judgement",
    description: "Awakening and calling: hearing the deeper summons of your life and answering it. This is review without shame—seeing what was, reclaiming what’s yours, and stepping forward renewed.\n\nQuestions:\n- What is life asking me to outgrow right now?\n- What would it look like to answer my calling in one concrete way?\n\nPractice: Write a ‘before/after’ inventory: what I release, what I reclaim, what I commit to. Choose one action.\n\nShadow: Harsh self-judgment, spiritual drama, or refusing the call out of fear.\n\nCorrespondences: Letter: Shin; Path: 31; Attribution: Fire",
    image: "/tarotdeck/judgement.jpeg",
  },
  {
    name: "The World",
    description: "Completion and integration: the dance of wholeness after long effort. You’ve learned something real; now the task is to embody it, close the loop, and re-enter life at a higher octave.\n\nQuestions:\n- What have I actually integrated—not just understood?\n- What chapter is ready to be completed with dignity?\n\nPractice: Finish one lingering project or conversation. Celebrate, then set a fresh, grounded intention.\n\nShadow: Restlessness after completion, or clinging to ‘the journey’ to avoid arrival.\n\nCorrespondences: Letter: Tav; Path: 32; Attribution: Saturn",
    image: "/tarotdeck/theworld.jpeg",
  },
  {
    name: "Ace of Cups",
    description: "A hand offers a cup overflowing into five streams: an opening of the heart, a fresh feeling, a new capacity to receive and give. Emotion wants to move—cleanly, honestly, and without apology.\n\nQuestions:\n- What feeling wants honest expression right now?\n- Where can I let myself receive without earning it?\n\nPractice: Open the heart deliberately: write one honest feeling and share it (with yourself or someone safe) without adding a story.\n\nShadow: Chasing intensity instead of tending the seed.\n\nCorrespondences: Suit: Cups (Water); Number: 1 (Kether); Root: Water",
    image: "/tarotdeck/aceofcups.jpeg",
  },
  {
    name: "Two of Cups",
    description: "Two figures exchange cups beneath a winged emblem: mutual recognition, equality, and the meeting of selves in truth. It’s the medicine of partnership—within you and between you.\n\nQuestions:\n- Where can I meet another (or myself) in mutual respect?\n- What inner parts want reconciliation and cooperation?\n\nPractice: Have one clean conversation: name what you feel, what you need, and what you’re willing to offer—no games.\n\nShadow: Indecision, split loyalties, or power games.\n\nCorrespondences: Suit: Cups (Water); Number: 2 (Chokmah); Astrology: Venus in Cancer",
    image: "/tarotdeck/twoofcups.jpeg",
  },
  {
    name: "Three of Cups",
    description: "A circle of friends raises their cups: belonging, shared joy, and the kind of community that makes life livable. Celebration here is a practice of gratitude, not escape.\n\nQuestions:\n- Who are my true allies and companions?\n- How can I celebrate without losing presence or integrity?\n\nPractice: Reach out to a friend or ally. Celebrate something small and real together.\n\nShadow: Distraction, gossip, or dependence on applause.\n\nCorrespondences: Suit: Cups (Water); Number: 3 (Binah); Astrology: Mercury in Cancer",
    image: "/tarotdeck/threeofcups.jpeg",
  },
  {
    name: "Four of Cups",
    description: "A figure sits under a tree, arms crossed, while an unseen hand offers a cup: apathy, withdrawal, and the invitation you might be ignoring. Your heart may be tired—or afraid to want.\n\nQuestions:\n- Where am I numbing or disengaging to avoid feeling?\n- What invitation am I dismissing too quickly?\n\nPractice: Ask yourself: “What would I say yes to if I wasn’t afraid?” Then accept one small offer.\n\nShadow: Stagnation, refusal, or emotional withdrawal.\n\nCorrespondences: Suit: Cups (Water); Number: 4 (Chesed); Astrology: Moon in Cancer",
    image: "/tarotdeck/fourofcups.jpeg",
  },
  {
    name: "Five of Cups",
    description: "Spilled cups on the ground, grief in the foreground, two cups still standing behind: loss that narrows vision. The work is to mourn honestly without missing what remains.\n\nQuestions:\n- What am I mourning—and what still remains?\n- Can I turn toward support instead of isolating in regret?\n\nPractice: Let yourself grieve (timer: 10 minutes). Then do one supportive action—text someone, take a walk, drink water.\n\nShadow: Bitterness, shame, or collapsing into hopelessness.\n\nCorrespondences: Suit: Cups (Water); Number: 5 (Geburah); Astrology: Mars in Scorpio",
    image: "/tarotdeck/fiveofcups.jpeg",
  },
  {
    name: "Six of Cups",
    description: "A child offers a cup of flowers: innocence, memory, and the sweetness of simple kindness. The past returns as a teacher—without requiring you to live there.\n\nQuestions:\n- What memory holds real medicine for me?\n- How can I bring innocence and kindness into today?\n\nPractice: Do one kind, simple thing that ‘past you’ would have loved. Let it be small and sincere.\n\nShadow: Nostalgia that avoids the present; idealizing the past.\n\nCorrespondences: Suit: Cups (Water); Number: 6 (Tiphereth); Astrology: Sun in Scorpio",
    image: "/tarotdeck/sixofcups.jpeg",
  },
  {
    name: "Seven of Cups",
    description: "Seven cups float like dream-choices, each holding a tempting vision: imagination, desire, confusion, and discernment. Not every beautiful image is your path.\n\nQuestions:\n- Which fantasy is seductive but not true for me?\n- What single choice would clarify my heart?\n\nPractice: Write the options in front of you. Cross out the ones that are fantasy-only. Choose one grounded step.\n\nShadow: Illusion, temptation, and scattered desire.\n\nCorrespondences: Suit: Cups (Water); Number: 7 (Netzach); Astrology: Venus in Scorpio",
    image: "/tarotdeck/sevenofcups.jpeg",
  },
  {
    name: "Eight of Cups",
    description: "A traveler leaves eight cups behind under a moonlit sky: turning away from what once satisfied to seek what is truer. It’s the courage to outgrow comfort.\n\nQuestions:\n- What am I ready to leave behind, even if it’s familiar?\n- What deeper calling asks for courage right now?\n\nPractice: Identify one attachment to release (habit, role, situation). Take the first exit-ramp step today.\n\nShadow: Avoidance disguised as ‘moving on’; cold detachment.\n\nCorrespondences: Suit: Cups (Water); Number: 8 (Hod); Astrology: Saturn in Pisces",
    image: "/tarotdeck/eightofcups.jpeg",
  },
  {
    name: "Nine of Cups",
    description: "A figure sits before nine cups like trophies: satisfaction, earned pleasure, and emotional contentment. The task is to enjoy without becoming complacent or performative.\n\nQuestions:\n- What does healthy satisfaction feel like in my body?\n- Where do I confuse comfort with completion?\n\nPractice: Enjoy something fully for 10 minutes with no multitasking. Notice what satisfaction feels like in your body.\n\nShadow: Complacency, smugness, or clinging to comfort.\n\nCorrespondences: Suit: Cups (Water); Number: 9 (Yesod); Astrology: Jupiter in Pisces",
    image: "/tarotdeck/nineofcups.jpeg",
  },
  {
    name: "Ten of Cups",
    description: "A rainbow of cups arcs over family and home: emotional fulfillment, reconciliation, and the feeling of being ‘at peace’ with life. Joy becomes real when it’s shared and grounded.\n\nQuestions:\n- What does ‘home’ feel like emotionally—and can I build it?\n- How can I share joy in a grounded way?\n\nPractice: Create one gesture of ‘home’—clean a corner, make a meal, repair a relationship—then share appreciation.\n\nShadow: Overload, excess, or carrying what isn’t yours.\n\nCorrespondences: Suit: Cups (Water); Number: 10 (Malkuth); Astrology: Mars in Pisces",
    image: "/tarotdeck/tenofcups.jpeg",
  },
  {
    name: "Page of Cups",
    description: "A youthful figure gazes at a fish rising from a cup: a surprising message from the feeling-world. Curiosity and gentleness make emotions workable.\n\nQuestions:\n- What new emotion wants a safe container?\n- Where can I practice gentle honesty and curiosity?\n\nPractice: Keep a feelings log for 3 days: name the emotion, the trigger, the need. Treat it like learning a language.\n\nShadow: Naivety or reactivity; mistaking novelty for truth.\n\nCorrespondences: Suit: Cups (Water); Court: Page (Earth of Water)",
    image: "/tarotdeck/pageofcups.jpeg",
  },
  {
    name: "Knight of Cups",
    description: "A knight carries a cup forward with devotion: the quest of the heart—romance, meaning, sincerity. Move toward what you love, but keep your feet on the ground.\n\nQuestions:\n- What am I pursuing—love, meaning, or an image?\n- How can I stay sincere without losing discernment?\n\nPractice: Write a sincere message or intention and follow it with one practical action.\n\nShadow: Impulsiveness, drama, or charging without direction.\n\nCorrespondences: Suit: Cups (Water); Court: Knight (Air of Water)",
    image: "/tarotdeck/knightofcups.jpeg",
  },
  {
    name: "Queen of Cups",
    description: "A queen holds a sealed cup beside the sea: deep empathy, intuitive containment, and emotional wisdom. She feels fully without drowning in it.\n\nQuestions:\n- What is my intuition saying beneath the noise?\n- Where do I need compassionate boundaries?\n\nPractice: Set one compassionate boundary. Protect your emotional space with kindness and firmness.\n\nShadow: Over-identification; absorbing everything; blurred boundaries.\n\nCorrespondences: Suit: Cups (Water); Court: Queen (Water of Water)",
    image: "/tarotdeck/queenofcups.jpeg",
  },
  {
    name: "King of Cups",
    description: "A king sits steady amid waves: emotional mastery, compassion, and calm leadership. He holds the heart’s weather without letting it rule the kingdom.\n\nQuestions:\n- How can I hold steady in strong feelings?\n- What is the mature response that keeps the heart open?\n\nPractice: Hold a steady container: breathe, listen, respond slowly. Lead with calm and care for one interaction today.\n\nShadow: Control, rigidity, or leading from ego instead of purpose.\n\nCorrespondences: Suit: Cups (Water); Court: King (Fire of Water)",
    image: "/tarotdeck/kingofcups.jpeg",
  },
  {
    name: "Ace of Pentacles",
    description: "A hand offers a pentacle above a garden path: the seed of embodiment—work, health, craft, and tangible opportunity. What you build now becomes your ground.\n\nQuestions:\n- What wants to be built, practiced, or cared for?\n- What small tangible step would ground this today?\n\nPractice: Choose one tangible next step (schedule, budget, meal, workout, study block). Do it today—small and real.\n\nShadow: Chasing intensity instead of tending the seed.\n\nCorrespondences: Suit: Pentacles (Earth); Number: 1 (Kether); Root: Earth",
    image: "/tarotdeck/aceofpentacles.jpeg",
  },
  {
    name: "Two of Pentacles",
    description: "A figure juggles two coins in an endless loop while waves rise behind: adaptability, rhythm, and learning to balance change. Stability here is dynamic, not rigid.\n\nQuestions:\n- Where am I juggling too much at once?\n- How can I adapt without losing my priorities?\n\nPractice: Time-box and prioritize: pick your top 2 obligations, then let the rest wait.\n\nShadow: Indecision, split loyalties, or power games.\n\nCorrespondences: Suit: Pentacles (Earth); Number: 2 (Chokmah); Astrology: Jupiter in Capricorn",
    image: "/tarotdeck/twoofpentacles.jpeg",
  },
  {
    name: "Three of Pentacles",
    description: "Craftspeople collaborate in a cathedral: apprenticeship, standards, and the dignity of doing good work. Skill grows in community and honest feedback.\n\nQuestions:\n- Where can I apprentice or collaborate for quality?\n- What does ‘good work’ look like in concrete terms?\n\nPractice: Ask for feedback on your work or skill. Improve one specific detail.\n\nShadow: Distraction, gossip, or dependence on applause.\n\nCorrespondences: Suit: Pentacles (Earth); Number: 3 (Binah); Astrology: Mars in Capricorn",
    image: "/tarotdeck/threeofpentacles.jpeg",
  },
  {
    name: "Four of Pentacles",
    description: "A figure holds coins tightly: boundaries, conservation, and fear of loss. The lesson is to secure what matters without closing the heart.\n\nQuestions:\n- What am I clinging to for safety?\n- Where can I loosen my grip and still stay grounded?\n\nPractice: Notice what you’re guarding. Loosen your grip in one safe area (share, delegate, donate, spend intentionally).\n\nShadow: Stagnation, refusal, or emotional withdrawal.\n\nCorrespondences: Suit: Pentacles (Earth); Number: 4 (Chesed); Astrology: Sun in Capricorn",
    image: "/tarotdeck/fourofpentacles.jpeg",
  },
  {
    name: "Five of Pentacles",
    description: "Two figures limp through snow past a lit sanctuary: hardship, shame, and the feeling of being ‘outside.’ Help exists—if you can let yourself look up.\n\nQuestions:\n- Where do I feel ‘outside’—and what help is nearby?\n- What is the next humane, practical step?\n\nPractice: Seek support: name the need out loud and take one step toward help (person, resource, plan).\n\nShadow: Bitterness, shame, or collapsing into hopelessness.\n\nCorrespondences: Suit: Pentacles (Earth); Number: 5 (Geburah); Astrology: Mercury in Taurus",
    image: "/tarotdeck/fiveofpentacles.jpeg",
  },
  {
    name: "Six of Pentacles",
    description: "One person gives coins while weighing fairness: reciprocity, generosity, and clean exchange. It asks you to notice where giving becomes control—or where receiving becomes shame.\n\nQuestions:\n- Where can I give and receive more fairly?\n- What would a clean exchange look like here?\n\nPractice: Do one act of clean exchange: give fairly, receive gratefully, or renegotiate a lopsided situation.\n\nShadow: Nostalgia that avoids the present; idealizing the past.\n\nCorrespondences: Suit: Pentacles (Earth); Number: 6 (Tiphereth); Astrology: Moon in Taurus",
    image: "/tarotdeck/sixofpentacles.jpeg",
  },
  {
    name: "Seven of Pentacles",
    description: "A gardener pauses to assess a growing plant: patience, evaluation, and long-term cultivation. What you’re growing may be real, just not finished.\n\nQuestions:\n- What is ripening slowly that I keep judging too soon?\n- What needs patience—what needs pruning?\n\nPractice: Review what you’ve been building for 90 days. Keep, prune, or adjust one thing based on results.\n\nShadow: Illusion, temptation, and scattered desire.\n\nCorrespondences: Suit: Pentacles (Earth); Number: 7 (Netzach); Astrology: Saturn in Taurus",
    image: "/tarotdeck/sevenofpentacles.jpeg",
  },
  {
    name: "Eight of Pentacles",
    description: "A worker carefully crafts pentacles one by one: practice, mastery, and the quiet confidence of repetition. Your future is shaped by what you do consistently.\n\nQuestions:\n- What skill deserves deliberate practice now?\n- What routine would support mastery?\n\nPractice: Deliberate practice: 25 minutes of one skill, distraction-free. Repeat tomorrow.\n\nShadow: Avoidance disguised as ‘moving on’; cold detachment.\n\nCorrespondences: Suit: Pentacles (Earth); Number: 8 (Hod); Astrology: Sun in Virgo",
    image: "/tarotdeck/eightofpentacles.jpeg",
  },
  {
    name: "Nine of Pentacles",
    description: "A figure stands in a cultivated garden with a falcon: self-sufficiency, refinement, and enjoying the results of disciplined care. Independence is meant to be savored, not weaponized.\n\nQuestions:\n- What does self-sufficiency mean (not isolation)?\n- How can I enjoy what I’ve cultivated without guilt?\n\nPractice: Enjoy your cultivation: take a slow walk, tend a plant, savor a meal. Let success land in the body.\n\nShadow: Complacency, smugness, or clinging to comfort.\n\nCorrespondences: Suit: Pentacles (Earth); Number: 9 (Yesod); Astrology: Venus in Virgo",
    image: "/tarotdeck/nineofpentacles.jpeg",
  },
  {
    name: "Ten of Pentacles",
    description: "A family scene inside a fortified home: legacy, belonging, and the structures that support life over time. Wealth here is continuity, not display.\n\nQuestions:\n- What legacy or foundation am I building?\n- What kind of home/community supports my becoming?\n\nPractice: Strengthen one foundation—family, home, savings, community, systems. Make a long-term friendly choice.\n\nShadow: Overload, excess, or carrying what isn’t yours.\n\nCorrespondences: Suit: Pentacles (Earth); Number: 10 (Malkuth); Astrology: Mercury in Virgo",
    image: "/tarotdeck/tenofpentacles.jpeg",
  },
  {
    name: "Page of Pentacles",
    description: "A student holds a pentacle with focused attention: beginner’s mind in the material world. Learning, planning, and committing to the next practical step.\n\nQuestions:\n- What skill or study wants commitment?\n- What would humble, steady progress look like?\n\nPractice: Begin a learning plan: one course, one book, or one mentor. Schedule the first session.\n\nShadow: Naivety or reactivity; mistaking novelty for truth.\n\nCorrespondences: Suit: Pentacles (Earth); Court: Page (Earth of Earth)",
    image: "/tarotdeck/pageofpentacles.jpeg",
  },
  {
    name: "Knight of Pentacles",
    description: "A knight sits patiently with a pentacle: steady effort, reliability, and the power of slow progress. This is devotion to the path, not the sprint.\n\nQuestions:\n- Where can I be consistent instead of intense?\n- What promise to myself can I keep today?\n\nPractice: Make a simple daily checklist and keep it for 7 days. Consistency is the spell.\n\nShadow: Impulsiveness, drama, or charging without direction.\n\nCorrespondences: Suit: Pentacles (Earth); Court: Knight (Air of Earth)",
    image: "/tarotdeck/knightofpentacles.jpeg",
  },
  {
    name: "Queen of Pentacles",
    description: "A queen cradles a pentacle in a fertile landscape: nourishment, stewardship, and body wisdom. She knows how to care for the real world without losing herself.\n\nQuestions:\n- How can I care for body, home, and resources without depletion?\n- Where can I be generous in a grounded way?\n\nPractice: Care for the body/home: cook, clean, rest, budget—one nurturing action that makes tomorrow easier.\n\nShadow: Over-identification; absorbing everything; blurred boundaries.\n\nCorrespondences: Suit: Pentacles (Earth); Court: Queen (Water of Earth)",
    image: "/tarotdeck/queenofpentacles.jpeg",
  },
  {
    name: "King of Pentacles",
    description: "A king surrounded by vines and harvest: mature stewardship, provision, and ethical command of resources. He builds systems that keep promises.\n\nQuestions:\n- What stewardship responsibility is mine?\n- How can I lead with patience and integrity?\n\nPractice: Make one stewardship decision: simplify a system, set a standard, or invest time in what lasts.\n\nShadow: Control, rigidity, or leading from ego instead of purpose.\n\nCorrespondences: Suit: Pentacles (Earth); Court: King (Fire of Earth)",
    image: "/tarotdeck/kingofpentacles.jpeg",
  },
  {
    name: "Ace of Swords",
    description: "A crowned sword rises from the clouds: mental clarity, truth, and the clean cut that ends confusion. Insight arrives; the task is to use it responsibly.\n\nQuestions:\n- What truth needs to be named clearly?\n- What confusion can I cut through with one decision?\n\nPractice: Write the truth in one sentence. Let that sentence guide your next decision.\n\nShadow: Chasing intensity instead of tending the seed.\n\nCorrespondences: Suit: Swords (Air); Number: 1 (Kether); Root: Air",
    image: "/tarotdeck/aceofswords.jpeg",
  },
  {
    name: "Two of Swords",
    description: "Blindfolded, holding two swords crossed: stalemate, avoidance, and the need for inner truce. The choice becomes possible when you feel what you’ve been blocking.\n\nQuestions:\n- Where am I avoiding a choice to keep the peace?\n- What happens if I stop fighting myself and feel the truth?\n\nPractice: Remove the blindfold: list the real stakes of each option, then choose the smallest step that reduces avoidance.\n\nShadow: Indecision, split loyalties, or power games.\n\nCorrespondences: Suit: Swords (Air); Number: 2 (Chokmah); Astrology: Moon in Libra",
    image: "/tarotdeck/twoofswords.jpeg",
  },
  {
    name: "Three of Swords",
    description: "A heart pierced by three blades under rain: sorrow, betrayal, and truth that hurts. Grief becomes wisdom when it’s allowed to move.\n\nQuestions:\n- What heartbreak wants to be felt instead of argued with?\n- What story keeps the wound open—and can I release it?\n\nPractice: Let the feeling move: breathe, cry, journal. Then tell the truth to someone safe or to yourself.\n\nShadow: Distraction, gossip, or dependence on applause.\n\nCorrespondences: Suit: Swords (Air); Number: 3 (Binah); Astrology: Saturn in Libra",
    image: "/tarotdeck/threeofswords.jpeg",
  },
  {
    name: "Four of Swords",
    description: "A figure rests in a sanctuary: recovery, contemplation, and strategic pause. Rest is not quitting; it’s preparation.\n\nQuestions:\n- Where do I need rest and recovery?\n- What boundary would protect my mind right now?\n\nPractice: Take a mental retreat: screen off, early night, quiet walk. Protect your attention like a sanctuary.\n\nShadow: Stagnation, refusal, or emotional withdrawal.\n\nCorrespondences: Suit: Swords (Air); Number: 4 (Chesed); Astrology: Jupiter in Libra",
    image: "/tarotdeck/fourofswords.jpeg",
  },
  {
    name: "Five of Swords",
    description: "A figure gathers swords while others walk away: hollow victory, conflict, and the cost of ‘being right.’ Integrity matters more than winning.\n\nQuestions:\n- Where am I trying to ‘win’ at the cost of integrity?\n- What would dignified retreat or repair look like?\n\nPractice: Choose integrity over victory: apologize, walk away, or reset the terms of engagement.\n\nShadow: Bitterness, shame, or collapsing into hopelessness.\n\nCorrespondences: Suit: Swords (Air); Number: 5 (Geburah); Astrology: Venus in Aquarius",
    image: "/tarotdeck/fiveofswords.jpeg",
  },
  {
    name: "Six of Swords",
    description: "A boat crosses water carrying swords: transition, moving on, and carrying lessons forward. You don’t need to resolve everything to leave what harms you.\n\nQuestions:\n- What transition is already underway?\n- What mental baggage can I set down to travel lighter?\n\nPractice: Pack lighter: write what you’re leaving behind and what you’re taking forward. Take one step toward the new shore.\n\nShadow: Nostalgia that avoids the present; idealizing the past.\n\nCorrespondences: Suit: Swords (Air); Number: 6 (Tiphereth); Astrology: Mercury in Aquarius",
    image: "/tarotdeck/sixofswords.jpeg",
  },
  {
    name: "Seven of Swords",
    description: "A figure sneaks away with stolen swords: strategy, secrecy, and self-deception. The question is whether you’re being clever—or avoiding honesty.\n\nQuestions:\n- Where am I being clever instead of honest?\n- What strategy becomes integrity when brought into the light?\n\nPractice: Come clean in one place: clarify, confess, or simplify the story. Honesty is strategy that works long-term.\n\nShadow: Illusion, temptation, and scattered desire.\n\nCorrespondences: Suit: Swords (Air); Number: 7 (Netzach); Astrology: Moon in Aquarius",
    image: "/tarotdeck/sevenofswords.jpeg",
  },
  {
    name: "Eight of Swords",
    description: "Bound and surrounded by swords: constriction, fear, and a story of helplessness. Often the prison is mental; one small movement changes everything.\n\nQuestions:\n- What belief is binding me?\n- What is one small movement that proves I’m not trapped?\n\nPractice: Challenge the prison-thought: write 3 alternative interpretations and test one with a small action.\n\nShadow: Avoidance disguised as ‘moving on’; cold detachment.\n\nCorrespondences: Suit: Swords (Air); Number: 8 (Hod); Astrology: Jupiter in Gemini",
    image: "/tarotdeck/eightofswords.jpeg",
  },
  {
    name: "Nine of Swords",
    description: "A figure sits up in bed, haunted by thoughts: anxiety, rumination, and inner torment. The mind asks for compassion and reality-checks.\n\nQuestions:\n- What thought-loop keeps me awake?\n- What would self-compassion and reality-checking sound like?\n\nPractice: Reality-check the worry: what’s evidence, what’s imagination, what’s solvable today? Then do one solvable thing.\n\nShadow: Complacency, smugness, or clinging to comfort.\n\nCorrespondences: Suit: Swords (Air); Number: 9 (Yesod); Astrology: Mars in Gemini",
    image: "/tarotdeck/nineofswords.jpeg",
  },
  {
    name: "Ten of Swords",
    description: "A figure lies pierced, dawn breaking: painful ending, surrender of an old narrative, and the truth that it’s over. The sunrise is already here.\n\nQuestions:\n- What is undeniably over?\n- How can I let the old narrative die and face the dawn?\n\nPractice: Close the chapter: delete the draft, end the habit, stop rereading the wound. Face one sunrise action.\n\nShadow: Overload, excess, or carrying what isn’t yours.\n\nCorrespondences: Suit: Swords (Air); Number: 10 (Malkuth); Astrology: Sun in Gemini",
    image: "/tarotdeck/tenofswords.jpeg",
  },
  {
    name: "Page of Swords",
    description: "A youth holds a sword in wind: curiosity, vigilance, and learning to speak truth. Precision and humility make intelligence useful.\n\nQuestions:\n- What curiosity wants disciplined inquiry?\n- How can I speak truth with humility?\n\nPractice: Ask good questions. Research, verify, and speak carefully—precision over performance.\n\nShadow: Naivety or reactivity; mistaking novelty for truth.\n\nCorrespondences: Suit: Swords (Air); Court: Page (Earth of Air)",
    image: "/tarotdeck/pageofswords.jpeg",
  },
  {
    name: "Knight of Swords",
    description: "A knight charges forward with sword raised: decisive thought, urgency, and the drive to act. Let your mind be sharp without becoming reckless.\n\nQuestions:\n- What cause am I charging toward—and is it worth it?\n- How can I slow down enough to be accurate?\n\nPractice: Slow the charge: verify facts, then act. Choose accuracy over adrenaline.\n\nShadow: Impulsiveness, drama, or charging without direction.\n\nCorrespondences: Suit: Swords (Air); Court: Knight (Air of Air)",
    image: "/tarotdeck/knightofswords.jpeg",
  },
  {
    name: "Queen of Swords",
    description: "A queen holds her sword upright: discernment, boundaries, and honest speech tempered by care. She can cut through illusion without cruelty.\n\nQuestions:\n- Where do I need clearer boundaries?\n- What truth can I deliver kindly but firmly?\n\nPractice: State one boundary clearly and once. No over-explaining.\n\nShadow: Over-identification; absorbing everything; blurred boundaries.\n\nCorrespondences: Suit: Swords (Air); Court: Queen (Water of Air)",
    image: "/tarotdeck/queenofswords.jpeg",
  },
  {
    name: "King of Swords",
    description: "A king on a throne with sword: ethical authority, clear judgment, and principled leadership. He asks you to decide from truth, not impulse.\n\nQuestions:\n- What principle guides my decisions?\n- How can I think clearly without becoming cold?\n\nPractice: Make a decision using a principle, not a mood. Document it and move forward.\n\nShadow: Control, rigidity, or leading from ego instead of purpose.\n\nCorrespondences: Suit: Swords (Air); Court: King (Fire of Air)",
    image: "/tarotdeck/kingofswords.jpeg",
  },
  {
    name: "Ace of Wands",
    description: "A hand offers a living wand sprouting leaves: the first spark of will, creativity, and vitality. Inspiration is a seed—feed it with action.\n\nQuestions:\n- What spark is asking to be acted on?\n- Where can I start before I feel ready?\n\nPractice: Act while the spark is alive: begin a rough first draft, send the message, take the first step.\n\nShadow: Chasing intensity instead of tending the seed.\n\nCorrespondences: Suit: Wands (Fire); Number: 1 (Kether); Root: Fire",
    image: "/tarotdeck/aceofwands.jpeg",
  },
  {
    name: "Two of Wands",
    description: "A figure holds the world while looking outward: vision, planning, and choosing a direction. The future is calling; commitment turns possibility into path.\n\nQuestions:\n- What future am I surveying—and what do I want?\n- What choice turns vision into commitment?\n\nPractice: Write a 3-step plan and pick the first step. Put it on the calendar.\n\nShadow: Indecision, split loyalties, or power games.\n\nCorrespondences: Suit: Wands (Fire); Number: 2 (Chokmah); Astrology: Mars in Aries",
    image: "/tarotdeck/twoofwands.jpeg",
  },
  {
    name: "Three of Wands",
    description: "A figure watches ships on the horizon: expansion, foresight, and the patience of waiting for what you’ve set in motion. Growth often arrives from beyond your familiar shore.\n\nQuestions:\n- What is ready to expand beyond my familiar shore?\n- How can I stay patient while results approach?\n\nPractice: Do the ‘horizon action’: reach out, apply, publish, ship, or ask—something that invites the world to respond.\n\nShadow: Distraction, gossip, or dependence on applause.\n\nCorrespondences: Suit: Wands (Fire); Number: 3 (Binah); Astrology: Sun in Aries",
    image: "/tarotdeck/threeofwands.jpeg",
  },
  {
    name: "Four of Wands",
    description: "A garlanded doorway and people celebrating: homecoming, stability, and joy built on shared effort. This is a threshold—pause and appreciate what’s been made.\n\nQuestions:\n- What milestone deserves celebration?\n- How can I build joy into my foundations?\n\nPractice: Mark a milestone: share gratitude, host a small celebration, or rest intentionally.\n\nShadow: Stagnation, refusal, or emotional withdrawal.\n\nCorrespondences: Suit: Wands (Fire); Number: 4 (Chesed); Astrology: Venus in Aries",
    image: "/tarotdeck/fourofwands.jpeg",
  },
  {
    name: "Five of Wands",
    description: "Figures spar with wands: friction, competition, and creative struggle. Conflict can be training when it stays playful and purposeful.\n\nQuestions:\n- Where is friction generating growth?\n- How can I compete or disagree without losing play?\n\nPractice: Use friction well: practice with others, debate kindly, or turn competition into training.\n\nShadow: Bitterness, shame, or collapsing into hopelessness.\n\nCorrespondences: Suit: Wands (Fire); Number: 5 (Geburah); Astrology: Saturn in Leo",
    image: "/tarotdeck/fiveofwands.jpeg",
  },
  {
    name: "Six of Wands",
    description: "A rider returns crowned with victory: recognition, confidence, and success that becomes responsibility. Let the win refine you, not inflate you.\n\nQuestions:\n- What success can I own without arrogance?\n- Who am I becoming through recognition?\n\nPractice: Accept recognition with humility. Name what worked and what you’ll improve next.\n\nShadow: Nostalgia that avoids the present; idealizing the past.\n\nCorrespondences: Suit: Wands (Fire); Number: 6 (Tiphereth); Astrology: Jupiter in Leo",
    image: "/tarotdeck/sixofwands.jpeg",
  },
  {
    name: "Seven of Wands",
    description: "A figure defends higher ground: courage, boundaries, and standing for your vision under pressure. This is the test of conviction.\n\nQuestions:\n- What is worth defending?\n- Where do I need courage to hold my ground?\n\nPractice: Hold your line: say no, defend your time, protect your project. Courage is a boundary kept.\n\nShadow: Illusion, temptation, and scattered desire.\n\nCorrespondences: Suit: Wands (Fire); Number: 7 (Netzach); Astrology: Mars in Leo",
    image: "/tarotdeck/sevenofwands.jpeg",
  },
  {
    name: "Eight of Wands",
    description: "Wands fly through the air: momentum, swift movement, and messages arriving quickly. Energy is available—aim it.\n\nQuestions:\n- What wants quick movement right now?\n- How can I aim momentum instead of scattering it?\n\nPractice: Move quickly on one thing: send, decide, commit. Then let momentum carry you.\n\nShadow: Avoidance disguised as ‘moving on’; cold detachment.\n\nCorrespondences: Suit: Wands (Fire); Number: 8 (Hod); Astrology: Mercury in Sagittarius",
    image: "/tarotdeck/eightofwands.jpeg",
  },
  {
    name: "Nine of Wands",
    description: "A guarded figure stands wounded but alert: resilience, vigilance, and protecting what matters. Rest, then hold your line.\n\nQuestions:\n- Where am I tired but still standing?\n- What boundary keeps my fire alive?\n\nPractice: Reinforce a boundary and rest. Protect your energy so you can keep going.\n\nShadow: Complacency, smugness, or clinging to comfort.\n\nCorrespondences: Suit: Wands (Fire); Number: 9 (Yesod); Astrology: Moon in Sagittarius",
    image: "/tarotdeck/nineofwands.jpeg",
  },
  {
    name: "Ten of Wands",
    description: "A figure carries too many wands toward town: burden, overcommitment, and success that became weight. It’s time to simplify and share the load.\n\nQuestions:\n- What have I taken on that isn’t mine?\n- What can I delegate or release right now?\n\nPractice: Lighten the load: list obligations, remove one, delegate one, and simplify one.\n\nShadow: Overload, excess, or carrying what isn’t yours.\n\nCorrespondences: Suit: Wands (Fire); Number: 10 (Malkuth); Astrology: Saturn in Sagittarius",
    image: "/tarotdeck/tenofwands.jpeg",
  },
  {
    name: "Page of Wands",
    description: "A youth holds a wand like a discovery: enthusiasm, experimentation, and the courage to begin. Curiosity is your compass.\n\nQuestions:\n- What new adventure is calling?\n- Where can I learn by doing and staying curious?\n\nPractice: Try the thing: a small adventure, a new class, a bold idea. Stay curious.\n\nShadow: Naivety or reactivity; mistaking novelty for truth.\n\nCorrespondences: Suit: Wands (Fire); Court: Page (Earth of Fire)",
    image: "/tarotdeck/pageofwands.jpeg",
  },
  {
    name: "Knight of Wands",
    description: "A knight charges forward on a rearing horse: bold action, passion, and risk. Lead with fire, then learn to steer it.\n\nQuestions:\n- Where is my passion leading me?\n- How can I channel fire without burning bridges?\n\nPractice: Channel fire: take bold action, then pause to reflect before the next leap.\n\nShadow: Impulsiveness, drama, or charging without direction.\n\nCorrespondences: Suit: Wands (Fire); Court: Knight (Air of Fire)",
    image: "/tarotdeck/knightofwands.jpeg",
  },
  {
    name: "Queen of Wands",
    description: "A queen holds a sunflower and wand: warmth, confidence, and creative magnetism. She invites embodied courage and joyful leadership.\n\nQuestions:\n- How can I embody confidence and warmth?\n- Where do I need to trust my creative instincts?\n\nPractice: Lead warmly: encourage someone, create, and trust your instincts in public.\n\nShadow: Over-identification; absorbing everything; blurred boundaries.\n\nCorrespondences: Suit: Wands (Fire); Court: Queen (Water of Fire)",
    image: "/tarotdeck/queenofwands.jpeg",
  },
  {
    name: "King of Wands",
    description: "A king holds a wand with steady gaze: vision, leadership, and mature creative authority. He asks you to act from purpose and inspire without forcing.\n\nQuestions:\n- What vision am I responsible for?\n- How can I inspire without controlling?\n\nPractice: Clarify the vision and take the first leadership step: decide, direct, and empower others.\n\nShadow: Control, rigidity, or leading from ego instead of purpose.\n\nCorrespondences: Suit: Wands (Fire); Court: King (Fire of Fire)",
    image: "/tarotdeck/kingofwands.jpeg",
  },
];

// Define the '/cards' endpoint to retrieve all cards
router.get("/", (req, res) => {
  res.json(tarotCards);
});

router.get("/onecard", (req, res) => {
  const randomIndex = Math.floor(Math.random() * tarotCards.length);
  const randomCard = tarotCards[randomIndex];
  res.json(randomCard);
});

module.exports = router;
