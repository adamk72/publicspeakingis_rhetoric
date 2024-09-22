// @ts-check
/**
 * @typedef FigureDef
 * @property {string} word
 * @property {string} definition
 * @property {string} etymology
 * @property {Array.<"Reduction" | "Arrangement" | "Omission">} strategies
 * @property {string} [commentary]
 * @property {Array.<string>} refs
 * @property {Array.<string>} [examples]
 * @property {Array.<string>} [opposites]
 * @property {Array.<string>} [similarities]
 * @property {Array.<string>} [relatedSilva]
 * @property {EnglishDef} [english]
 * @property {string} [latin] - favor the greek or english when possible
 * @property {"High" | "Medium" | "Low"} [utility]
 */

/**
 * @typedef EnglishDef
 * @property {string} word
 * @property {string} definition
 */

/**
 * @typedef {Array.<FigureDef>} Figures
 */

/** @type {Figures} */
const figures = [
  {
    word: "anesis",
    definition:
      "Using a concluding sentence that diminishes the value or context of what was previously said.",
    examples: [
      "He could consume books at a phenomenal rate; sadly, he couldn't retain much of what he read.",
    ],
    refs: [
      "https://rhetoric.byu.edu/",
      "https://en.wiktionary.org/wiki/anesis",
    ],
    etymology: "loosening, abatement, remission",
    english: {
      word: "abating",
      definition: "to become lesser or smaller or to make less significant",
    },
    strategies: ["Reduction"],
    opposites: ["epitasis"],
    similarities: ["meiosis", "charientismus"],
  },
  {
    word: "acrostic",
    definition:
      "Arranging the first letter of each sentence in a composition to form a word or to be in alphabetical order.",
    etymology: "akro: beginning; stichis: line, row, rank",
    examples: [
      " Your answer must not come by prying force. / Except that gentle urging of your mind. / So take your time, and tell me when you will. src: 'Silva'",
    ],
    refs: [
      "https://en.wikipedia.org/wiki/Acrostic",
      "https://www.merriam-webster.com/dictionary/acrostic",
      "https://rhetoric.byu.edu/",
    ],
    strategies: ["Arrangement"],
    opposites: ["anaphora"],
    similarities: ["alliteration", "anaphora"],
    relatedSilva: ["abecedarian"],
  },
  {
    word: "aphaeresis",
    definition: "Omission of the fist letter or syllable of a word.",
    examples: ["What's the third R? Rithmetic! src: 'Silva"],
    etymology: "aphaire: to take away; sis: action",
    strategies: ["Omission"],
    refs: [
      "https://www.merriam-webster.com/dictionary/aphaeresis",
      "https://rhetoric.byu.edu/",
    ],
    utility: "Low",
  },
  {
    word: "",
    definition: "",
    etymology: "",
    strategies: [],
    refs: [],
  },
  {
    word: "",
    definition: "",
    etymology: "",
    strategies: [],
    refs: [],
  },
];
