// libs
import { useEffect, useState } from "react";

// components
import QuizWord from "../../components/QuizWord";

// hooks
import useWordsProgress from "../../hooks/useWordsProgress";

// utils
import shuffle from "../../utils/shuffle";

// constants
import WORDS from "../../constants/WORDS";

// styles
import classes from "./styles.module.css";

const TABS = {
  initialization: "initialization",
  options: "options",
  quiz: "quiz",
};

export default function QuizPage() {
  const [tab, setTab] = useState(TABS.initialization);
  const [isShuffle, setIsShuffle] = useState(false);
  const [quizWords, setQuizWords] = useState([]);
  const { wordsProgress, initWordsProgress, findProgressByWordId } =
    useWordsProgress();
  const [wordsCategories, setWordsCategories] = useState({
    badStudied: [],
    classes: [],
    newWords: [],
  });

  const isOptionTab = tab === TABS.options;
  const isQuizTab = tab === TABS.quiz;

  const selectCategory = (categoryWords) => {
    const result = isShuffle ? shuffle(categoryWords) : categoryWords;
    setQuizWords(result);
    setTab(TABS.quiz);
  };

  useEffect(() => {
    initWordsProgress();
  }, []);

  useEffect(() => {
    if (wordsProgress.length === 0) return;

    const badStudied = [];
    const classes = [];
    const newWords = [];

    for (let i = 0; i < WORDS.length; ++i) {
      const word = WORDS[i];
      const wordProgress = findProgressByWordId(word.id);
      const wordClass = word.number - 1;

      // bad studies words
      if (wordProgress < 0) {
        badStudied.push(word);
      }

      // new words
      if (wordProgress === 0) {
        newWords.push(word);
      }

      // classes
      if (!classes[wordClass]) classes[wordClass] = [];
      classes[wordClass].push(word);
    }

    setWordsCategories({ classes: classes.reverse(), badStudied, newWords });
    setTab(TABS.options);
  }, [wordsProgress]);

  return (
    <div className={classes.root}>
      {isOptionTab && (
        <div className={classes.options}>
          <label htmlFor="shuffle">
            <input
              type="checkbox"
              value={isShuffle}
              onChange={(e) => setIsShuffle(e.target.checked)}
              name="shuffle"
              id="shuffle"
            />
            Խառնել բառերը
          </label>

          {wordsCategories.badStudied.length > 0 && (
            <button
              onClick={() => selectCategory(wordsCategories.badStudied)}
              className={`${classes.categoryButton} ${classes.badWordsButton}`}
            >
              Ուղղել սխալները <span>({wordsCategories.badStudied.length})</span>
            </button>
          )}

          {wordsCategories.newWords.length > 0 && (
            <button
              onClick={() => selectCategory(wordsCategories.newWords)}
              className={`${classes.categoryButton} ${classes.newWordsButton}`}
            >
              Նոր բառեր <span>({wordsCategories.newWords.length})</span>
            </button>
          )}

          <button
            onClick={() => selectCategory(WORDS)}
            className={classes.categoryButton}
          >
            Բոլոր բառերը <span>({WORDS.length})</span>
          </button>

          <div className={classes.classes}>
            {wordsCategories.classes.map((_wordData, ind) => (
              <button
                onClick={() => selectCategory(wordsCategories.classes[ind])}
                className={classes.categoryButton}
                key={ind}
              >
                Դաս {wordsCategories.classes.length - ind}
                <span>({wordsCategories.classes[ind].length})</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {isQuizTab && (
        <div>
          <button
            className={classes.backButton}
            onClick={() => setTab(TABS.options)}
          >
            Վերադառնալ
          </button>
          <QuizWord
            inputWords={quizWords}
            setOptionsTab={() => setTab(TABS.options)}
          />
        </div>
      )}
    </div>
  );
}
