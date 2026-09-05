class Grammar {
  static types = {
    toBe: "to be",
    header: "header",
    sentenseExample: "sentense example",
    hintWords: "hints words",
    shortVersion: "short version",
    rule: "rule",
  };

  constructor() {
    this.data = null;
    this.type = null;
  }

  setType(type) {
    this.type = type;
    return this;
  }

  header(text) {
    this.type = Grammar.types.header;
    this.data = text;
    return this;
  }

  toBe(text) {
    this.type = Grammar.types.toBe;
    this.data = text;
    return this;
  }

  sentenseExample(singular, plural) {
    this.type = Grammar.types.sentenseExample;
    this.data = { singular, plural };
    return this;
  }

  hintWords(...words) {
    this.type = Grammar.types.hintWords;
    this.data = words;
    return this;
  }

  shortVersion(data) {
    this.type = Grammar.types.shortVersion;
    this.data = data;
    return this;
  }

  rule(data) {
    this.type = Grammar.types.rule;
    this.data = data;
    return this;
  }
}

const GRAMMAR = [
  {
    title: "Present Simple",
    data: [
      new Grammar().toBe("am/is/are"),
      new Grammar().hintWords("now", "at the moment"),
      new Grammar().shortVersion([
        ["I am", "I'm"],
        ["You are", "You're"],
        ["He is", "He's"],
        ["She is", "She's"],
        ["It is", "It's"],
        ["We are", "We're"],
        ["You are", "You're"],
        ["They are", "They're"],
      ]),
      new Grammar().sentenseExample(
        ["I am", "You are", "He is", "She is", "It is"],
        ["We are", "You are", "They are"],
      ),

      new Grammar().header("?? Question ??"),
      new Grammar().rule(`"I" ու "am" տեղերով փոխվում են - "Am I"`),
      new Grammar().sentenseExample(
        ["Am I ?", "Are you ? ", "Is he ?", "Is she ?", "Is it ?"],
        ["Are we ?", "Are you ?", "Are they ?"],
      ),

      new Grammar().header("!! Negative !!"),
      new Grammar().rule("am/is/are + not"),
      new Grammar().shortVersion([
        ["I am not", "I'm not"],
        ["are not", "aren't"],
        ["is not", "isn't"],
      ]),
      new Grammar().sentenseExample(
        ["I am not", "You are not", "He is not", "She is not", "It is not"],
        ["We are not", "You are not", "They are not"],
      ),
    ],
  },
  {
    title: "Past Simple",
    data: [],
  },
  {
    title: "Future Simple",
    data: [],
  },
  {
    title: "Present Continuous Tense",
    data: [],
  },
];

export default GRAMMAR;
export const { types: grammarTypes } = GRAMMAR;
