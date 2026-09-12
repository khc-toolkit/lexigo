class Word {
  constructor(number, word, translate, id) {
    this.number = number;
    this.word = word;
    this.translate = translate;
    this.id = id;
  }
}

const WORDS = [
  new Word(4, "Bath", "Lոգանք", 139),
  new Word(4, "Wondering", "Մտացել", 138),
  new Word(4, "Poor", "Աղքատ", 137),
  new Word(4, "Ashamed", "Ամաչող", 136),
  new Word(4, "Scold", "նախատել", 135),
  new Word(4, "Dusty", "Փոշոտ", 134),
  new Word(4, "Far away", "Հեռու", 133),
  new Word(4, "Hearty", "Սրտանց", 132),
  new Word(4, "Prepare", "Պատրաստել", 131),
  new Word(4, "Appear", "Հայտնվել", 130),
  new Word(4, "Dining-room", "Ճաշասենյակ", 129),
  new Word(4, "Disturb", "Խանգարել", 128),
  new Word(4, "Absent-minded", "Ցրված", 127),
  new Word(4, "Advise", "Խորհուրդ տալ", 126),
  new Word(4, "Violent", "Բռնի", 125),
  new Word(4, "Quarrelled", "Վիճեց", 124),
  new Word(4, "Particular", "Կոնկրետ", 123),
  new Word(4, "Led", "Հանգեցրեց", 122),
  new Word(4, "Gathered", "Հավաքված", 121),
  new Word(4, "Occasionally", "Ժամանակ առ ժամանակ", 120),
  new Word(4, "Indeed", "Անկասկած", 119),
  new Word(4, "Share", "Մասնաբաժին", 118),
  new Word(4, "Will", "Կտակ", 117),
  new Word(4, "Hardly ever", "Գրեթե երբեք", 116),
  new Word(4, "Seldom", "Հազվադեպ", 115),
  new Word(3, "Astonishment", "Զարմանք", 114),
  new Word(3, "Rather", "Ավելի շուտ", 113),
  new Word(3, "Arrangements", "Պայմանավորվածություններ / կազմակերպումներ", 112),
  new Word(3, "Expecting", "Սպասելով / ակնկալելով", 111),
  new Word(3, "Abroad", "Արտասահմանում", 110),
  new Word(3, "Hurry", "Շտապել", 109),
  new Word(3, "Wet", "Ոաց", 108),
  new Word(3, "Waving", "Ձեռքով անել", 107),
  new Word(3, "Scratching", "Քերձել", 106),
  new Word(3, "Crossing", "Անցում", 105),
  new Word(3, "Pulled", "Քաշվել", 104),
  new Word(3, "Adjectives", "Ածական", 103),
  new Word(3, "Drew", "Նկարեց", 102),
  new Word(3, "Also", "Նաև", 101),
  new Word(3, "Brought", "Բերել", 100),
  new Word(3, "Trouble", "Խնդիր", 99),
  new Word(3, "Manage", "Կարողանալ", 98),
  new Word(3, "Toward", "Դեպի", 97),
  new Word(3, "Pleasant", "Հաճելի", 96),
  new Word(3, "Behaving", "Վարվելակերպ", 95),
  new Word(3, "Ribbon", "Ժապավեն", 94),
  new Word(3, "Drop", "Կաթիլ", 93),
  new Word(3, "Around", "Շուրջ", 92),
  new Word(3, "Certain", "Որոշակի", 91),
  new Word(3, "Suppose", "Ենթադրել", 90),
  new Word(3, "Several", "Մի քանի", 89),
  new Word(3, "Report", "Հաղորդել", 88),
  new Word(3, "Ever", "Երբև է", 87),
  new Word(3, "Comprehend", "Հասկանալ", 86),
  new Word(3, "Among", "Մեջից", 85),
  new Word(3, "Chart", "Աղյուսակ", 84),
  new Word(2, "Close to", "Մոտիկ", 83),
  new Word(2, "Quarrel", "Վեճ", 82),
  new Word(2, "Overlooked", "Բաց թողում", 81),
  new Word(2, "Went out", "Դուրս գալ", 80),
  new Word(2, "Refuse", "Հրաժարվել", 79),
  new Word(2, "Relative", "Ազգական", 78),
  new Word(2, "Gather", "Հավաքել", 77),
  new Word(2, "Demand", "Պահանջարկ", 76),
  new Word(2, "Fortune", "Բախտ", 75),
  new Word(2, "Jar", "Ապակե տարա", 74),
  new Word(2, "Suddenly", "Հանկարծակի", 73),
  new Word(2, "Seem", "Թվալ", 72),
  new Word(2, "Worse", "Ավելի վատ", 71),
  new Word(2, "Shout", "Գոռալ", 70),
  new Word(2, "Unpleasant", "Տհաճ", 69),
  new Word(2, "Loud", "Բարձր", 68),
  new Word(2, "Swatter", "Ճանճասպան", 67),
  new Word(2, "Carefully", "Ուշադիր", 66),
  new Word(2, "Approach", "Մոտենալ", 65),
  new Word(2, "Rought", "Կոպիտ", 64),
  new Word(2, "Nurse", "Բույժքույր", 63),
  new Word(2, "Interapting", "Ընդհատել", 62),
  new Word(2, "Going to", "Պատրաստվել", 61),
  new Word(2, "Spelling", "Ուղղագրություն", 60),
  new Word(2, "Get to", "Հասնել", 59),
  new Word(2, "Reach", "Հասնել", 58),
  new Word(2, "Look to", "Ուշադրություն դարձնել", 57),
  new Word(2, "Things", "Առարկա", 56),
  new Word(1, "Heavy", "Ծանր", 55),
  new Word(1, "ill", "Հիվանդ", 54),
  new Word(1, "Warm", "Տաք", 53),
  new Word(1, "Coat", "Պալտո", 52),
  new Word(1, "Windy", "Քամոտ", 51),
  new Word(1, "Cheap", "Էժան", 50),
  new Word(1, "Tired", "Հոգնած", 49),
  new Word(1, "Lawyer", "Փաստաբան", 48),
  new Word(1, "Typist", "Մեքենայագրող", 47),
  new Word(1, "Shelf", "Դարակ", 46),
  new Word(1, "Subject", "Իր", 45),
  new Word(1, "Afraid", "Վախեցած", 44),
  new Word(1, "Upset", "Նեղվել", 43),
  new Word(1, "Kind", "Բարի", 42),
  new Word(1, "Meal", "Ուտելիք", 41),
  new Word(1, "Exciting", "Հուզված", 40),
  new Word(1, "Debt", "Պարտք", 39),
  new Word(1, "Worst", "Վատագույն", 38),
  new Word(1, "Poverty", "Աղքատություն", 37),
  new Word(1, "Worth", "Առժեք", 36),
  new Word(1, "Reliable", "Հուսալիություն", 35),
  new Word(1, "Forecast", "Կանծատեսում", 34),
  new Word(1, "Expensive", "Թանկ", 33),
  new Word(1, "Terrible", "Սարսափելի", 32),
  new Word(1, "Sick", "Հիվանդ", 31),
  new Word(1, "Yard", "Բակ", 30),
  new Word(1, "Living room", "Հյուրասենյակ", 29),
  new Word(1, "Noisy", "Աղմուկ", 28),
  new Word(1, "Sink", "Լվացարան", 27),
  new Word(1, "Exhausted", "Տանջված", 26),
  new Word(1, "Exhibition", "Ցուցահանդես", 25),
  new Word(1, "Trip", "Ուղևորություն", 24),
  new Word(1, "Excited", "Անհանգիստ", 23),
  new Word(1, "Arrive", "Ժամանել", 22),
  new Word(1, "Clever", "Խելացի", 21),
  new Word(1, "Cruel", "Դաժան", 20),
  new Word(1, "Lot", "Շատ", 19),
  new Word(1, "Pleased", "Գոհ", 18),
  new Word(1, "Safe", "Անվտանք", 17),
  new Word(1, "Trick", "Հնարք", 16),
  new Word(1, "Fear", "Վախ", 15),
  new Word(1, "Loudly", "Բարձր", 14),
  new Word(1, "Corner", "Անկյուն", 13),
  new Word(1, "Thought", "Միտք", 12),
  new Word(1, "Let", "Թույլ տալ", 11),
  new Word(1, "Long ago", "Շատ շուտ", 10),
  new Word(1, "Maple", "Կլյոն", 9),
  new Word(1, "Sure", "Իհարկե", 8),
  new Word(1, "Belt", "Գոտի", 7),
  new Word(1, "Fool", "Խաբել", 6),
  new Word(1, "Couple", "Զույգ", 5),
  new Word(1, "Quite(well)", "Բավականին(լավ)", 4),
  new Word(1, "Definition", "Համապատասխան", 3),
  new Word(1, "Mad", "Խելագար", 2),
  new Word(1, "Noon", "Կեսօր", 1),
  new Word(1, "Cage", "Վանդակ", 0),
];

(() => {
  if (!true) {
    const repeatedWords = new Set();
    let id = WORDS[0].id;

    for (let i = 1; i < WORDS.length; ++i) {
      // findind dublicates
      if (repeatedWords.has(WORDS[i].word)) {
        console.log(WORDS[i].word);
      }
      repeatedWords.add(WORDS[i].word);

      // findind not forward id's
      if (Math.abs(id - WORDS[i].id) > 1) {
        console.log(id);
      }
      id = WORDS[i].id;
    }
  }
})();

export default WORDS;
