// libs
import { useEffect, useState } from "react";

// constants
import WORDS from "../../constants/WORDS";

// styles
import classes from "./styles.module.css";

export default function QuizPage() {
  const [words, setWords] = useState(
    shuffle(JSON.parse(JSON.stringify(WORDS))),
  );

  const [wInd, setWInd] = useState(0);
  const [isShowRightVersion, setIsShowRightVersion] = useState(false);
  const [rightTranslates, setRightTranslates] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState(-1);

  const updateRightTranslates = () => {
    const currentWordData = words[wInd];

    let result = new Set();
    result.add(currentWordData.translate);
    while (result.size < 8) {
      const randomWordInd = Math.floor(Math.random() * words.length);
      result.add(words[randomWordInd].translate);
    }

    setRightTranslates(shuffle(Array.from(result)));
  };

  const nextWord = () => {
    let nextInd = wInd + 1;
    if (nextInd >= words.length) {
      nextInd = 0;
    }

    setWInd(nextInd);
  };

  const selectVariant = (ind, isValid) => {
    // show right variant
    if (!isShowRightVersion) {
      setIsShowRightVersion(true);
      if (!isValid) {
        setSelectedVariant(ind);
      }
      return;
    }

    // next word
    nextWord();
    setIsShowRightVersion(false);
    setSelectedVariant(-1);
  };

  useEffect(() => {
    updateRightTranslates();
  }, []);

  useEffect(() => {
    updateRightTranslates();
    setIsShowRightVersion(false);
  }, [wInd]);

  const currentWordData = words[wInd];

  return (
    <div className={classes.root}>
      <div className={classes.wordBox}>
        <p className={classes.word}>{currentWordData.word}</p>
      </div>

      <div className={classes.variants}>
        {rightTranslates.map((translate, ind) => (
          <button
            className={`${classes.variant} ${selectedVariant === ind && classes.invalidVersion}  ${isShowRightVersion && translate === currentWordData.translate && classes.rightVariant}`}
            onClick={() =>
              selectVariant(ind, translate === currentWordData.translate)
            }
            key={ind}
          >
            {translate}
          </button>
        ))}
      </div>
    </div>
  );
}

function shuffle(arr) {
  const array = [...arr];

  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
