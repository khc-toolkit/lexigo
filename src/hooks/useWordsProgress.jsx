// libs
import { useState } from "react";

// constants
import WORDS from "../constants/WORDS";

export default function useWordsProgress() {
  const [wordsProgress, setWordsProgress] = useState([]);

  const initWords = () => {
    const progress =
      JSON.parse(localStorage.getItem("wordsProgress")) ??
      new Array(WORDS.length).fill(0);
    setWordsProgress(progress);
  };

  const save = () => {
    localStorage.setItem("wordsProgress", JSON.stringify(wordsProgress));
  };

  const regress = (ind) => {
    setWordsProgress((prev) => {
      prev[ind] -= 1;
      save();
      return prev;
    });
  };

  const progress = (ind) => {
    setWordsProgress((prev) => {
      prev[ind] += 1;
      save();
      return prev;
    });
  };

  return { wordsProgress, initWords, regress, progress };
}
