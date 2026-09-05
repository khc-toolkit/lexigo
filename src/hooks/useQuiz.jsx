// libs
import { useState, useEffect } from "react";

// hooks
import useWordsProgress from "./useWordsProgress";

// utils
import shuffle from "../utils/shuffle";

// constants
import WORDS from "../constants/WORDS";

export default function useQuiz(initWords) {
  const [words, setWords] = useState(initWords);
  const [wInd, setWInd] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [isShowRightVersion, setIsShowRightVersion] = useState(false);
  const [rightTranslates, setRightTranslates] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState(-1);
  const { initWordsProgress, progress, regress, findProgressByWordId } =
    useWordsProgress();

  const currentWordData = words[wInd];
  const currentWordProgress = findProgressByWordId(currentWordData.id);

  const updateRightTranslates = () => {
    const currentWordData = words[wInd];

    let result = new Set();
    result.add(currentWordData.translate);
    while (result.size < 4) {
      const randomWordInd = Math.floor(Math.random() * WORDS.length);
      result.add(WORDS[randomWordInd].translate);
    }

    setRightTranslates(shuffle(Array.from(result)));
  };

  const nextWord = () => {
    if (wInd + 1 >= words.length) {
      setIsEnd(true);
    } else {
      setWInd((prev) => prev + 1);
    }
  };

  const selectVariant = (ind, isValid) => {
    // show right variant
    if (!isShowRightVersion) {
      setIsShowRightVersion(true);

      if (isValid) {
        progress(currentWordData.id);
      } else {
        setWords((prev) => [...prev, currentWordData]);
        regress(currentWordData.id);
        setSelectedVariant(ind);
      }
    } else {
      // next word
      nextWord();
      setIsShowRightVersion(false);
      setSelectedVariant(-1);
    }
  };

  useEffect(() => {
    updateRightTranslates();
    initWordsProgress();
  }, []);

  useEffect(() => {
    updateRightTranslates();
    setIsShowRightVersion(false);
  }, [wInd]);

  return {
    wInd,
    words,
    isEnd,
    rightTranslates,
    selectedVariant,
    currentWordData,
    isShowRightVersion,
    currentWordProgress,
    setWords,
    selectVariant,
    findProgressByWordId,
  };
}
