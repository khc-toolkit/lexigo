const grammarTypes = {
  toBe: "to be",
  header: "header",
  sentenseExample: "sentense example",
  hintWords: "hints words",
  shortVersion: "short version",
  rule: "rule",
};

class Grammar {
  constructor() {
    this.data = null;
    this.type = null;
  }

  setType(type) {
    this.type = type;
    return this;
  }

  header(text) {
    this.type = grammarTypes.header;
    this.data = text;
    return this;
  }

  toBe(text) {
    this.type = grammarTypes.toBe;
    this.data = text;
    return this;
  }

  sentenseExample(singular, plural) {
    this.type = grammarTypes.sentenseExample;
    this.data = { singular, plural };
    return this;
  }

  hintWords(...words) {
    this.type = grammarTypes.hintWords;
    this.data = words;
    return this;
  }

  shortVersion(data) {
    this.type = grammarTypes.shortVersion;
    this.data = data;
    return this;
  }

  rule(data) {
    this.type = grammarTypes.rule;
    this.data = data;
    return this;
  }
}

const GRAMMAR = [
  {
    title: "Present Simple",
    data: [
      new Grammar().toBe("am/is/are"),
      new Grammar().hintWords(
        "now",
        "at the moment",
        "always",
        "usually",
        "sometimes",
        "rarely",
        "never",
        "every day/week/month/year",
        "in the morning",
      ),
      new Grammar().sentenseExample(
        ["I am", "You are", "He is", "She is", "It is"],
        ["We are", "You are", "They are"],
      ),
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

      new Grammar().header("?? Question ??"),
      new Grammar().rule(`"I am" - "Am I"`),
      new Grammar().sentenseExample(
        ["Am I?", "Are you ? ", "Is he?", "Is she?", "Is it?"],
        ["Are we?", "Are you?", "Are they?"],
      ),

      new Grammar().header("!! Negative !!"),
      new Grammar().rule("am/is/are + not"),
      new Grammar().sentenseExample(
        [
          "I am not!",
          "You are not!",
          "He is not!",
          "She is not!",
          "It is not!",
        ],
        ["We are not!", "You are not!", "They are not!"],
      ),
      new Grammar().shortVersion([
        ["I am not", "I'm not"],
        ["are not", "aren't"],
        ["is not", "isn't"],
      ]),
    ],
  },
  {
    title: "Past Simple",
    data: [
      new Grammar().toBe("was/where"),
      new Grammar().hintWords(
        "yesterday",
        "last week/night/month/year",
        "... ago",
        "in *year*",
        "then",
        "the other day",
      ),

      new Grammar().sentenseExample(
        ["I was", "You where", "He was", "She was", "It was"],
        ["We were", "You were", "They were"],
      ),

      new Grammar().header("?? Question ??"),
      new Grammar().rule(`"I was" - "Was I"`),
      new Grammar().sentenseExample(
        ["Was I?", " Where you?", "Was he?", "Was she?", "Was it?"],
        ["Where we?", "Where you?", "Where they?"],
      ),

      new Grammar().header("!! Negative !!"),
      new Grammar().rule("was/were + not"),
      new Grammar().sentenseExample(
        [
          "I was not!",
          "You were not!",
          "He was not!",
          "She was not!",
          "It was not!",
        ],
        ["We were not!", "You were not!", "They were not!"],
      ),
      new Grammar().shortVersion([
        ["was not", "wasn't"],
        ["were not", "weren't"],
      ]),
    ],
  },
  {
    title: "Future Simple",
    data: [
      new Grammar().toBe("shall/will"),
      new Grammar().hintWords(
        "tomorrow",
        "tonight",
        "later",
        "soon",
        "next week/month/year",
        "in 2 days",
        "one day",
      ),
      new Grammar().sentenseExample(
        [
          "I shall/will be",
          "You will be",
          "He will be",
          "She will be",
          "It will be",
        ],
        ["We shall/will be", "You will be", "They will be"],
      ),
      new Grammar().header("?? Question ??"),
      new Grammar().rule(`"I will be" - "Will I be?"`),
      new Grammar().sentenseExample(
        [
          "Will I be?",
          "Will you be?",
          "Will he be?",
          "Will she be?",
          "Will it be?",
        ],
        ["Will we be?", "Will you be?", "Will they be?"],
      ),

      new Grammar().header("!! Negative !!"),
      new Grammar().rule("will + not + be"),
      new Grammar().sentenseExample(
        [
          "I will not be!",
          "You will not be!",
          "He will not be!",
          "She will not be!",
          "It will not be!",
        ],
        ["We will not be!", "You will not be!", "They will not be!"],
      ),
      new Grammar().shortVersion([
        ["will not be", "won't be"],
        ["shall not be", "shan't be"],
      ]),
    ],
  },
  {
    title: "Present Continuous Tense",
    data: [],
  },
];

export default GRAMMAR;
export { grammarTypes };
