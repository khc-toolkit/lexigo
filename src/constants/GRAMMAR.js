class Grammar {
  static types = {
    text: "text",
    header: "header",
    toBe: "to be",
  };

  constructor(data, type = Grammar.types.text) {
    this.data = data;
    this.type = type;
  }

  setType(type) {
    this.type = type;
    return this;
  }
}

const GRAMMAR = [
  {
    title: "Present Simple",
    data: [
      new Grammar("am/is/are", Grammar.types.toBe),
      new Grammar("", Grammar.types.header),
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
