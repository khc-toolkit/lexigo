// libs
import { useState } from "react";

// constants
import WORDS from "../constants/WORDS";

export default function useWordsProgress() {
  const [wordsProgress, setWordsProgress] = useState([]);

  const initWordsProgress = () => {
    let progress =
      JSON.parse(localStorage.getItem("wordsProgress")) ??
      new Array(WORDS.length).fill(0);

    if (progress.length < WORDS.length) {
      const emptySlots = Math.abs(WORDS.length - progress.length);
      const arr = new Array(emptySlots).fill(0);
      progress = [...progress, ...arr];
    }

    setWordsProgress(progress);
  };

  const save = () => {
    localStorage.setItem("wordsProgress", JSON.stringify(wordsProgress));
  };

  const regress = (ind) => {
    setWordsProgress((prev) => {
      prev[ind] = -1;
      save();
      return prev;
    });
  };

  const progress = (ind) => {
    setWordsProgress((prev) => {
      prev[ind] = 1;
      save();
      return prev;
    });
  };

  const findProgressByWordId = (wordId) => {
    return wordsProgress[wordId];
  };

  return {
    wordsProgress,
    regress,
    progress,
    initWordsProgress,
    findProgressByWordId,
  };
}
