// libs
import { useEffect } from "react";

// components
import WordsPageWord from "../../components/WordsPageWord";
import ChartNeitral from "../../components/ChartNeitral";
import ChartDown from "../../components/ChartDown";
import ChartUp from "../../components/ChartUp";

// hooks
import useSettings from "../../hooks/useSettings";
import useWordsProgress from "../../hooks/useWordsProgress";

// constants
import WORDS from "../../constants/WORDS";
import SETTINGS from "../../constants/SETTINGS";

// styles
import classes from "./styles.module.css";

export default function WordsPage() {
  const { value: isShowTranslates, toggleValue: toggleShowTranslates } =
    useSettings(SETTINGS.showTranslates);

  const { wordsProgress, initWordsProgress } = useWordsProgress();

  const calculateProgresses = () => {
    const progresses = [0, 0, 0];
    for (let i = 0; i < WORDS.length; ++i) {
      const progress = wordsProgress[WORDS[i].id];
      if (progress < 0) {
        ++progresses[0];
      } else if (progress === 0) {
        ++progresses[1];
      } else {
        ++progresses[2];
      }
    }

    return progresses;
  };

  useEffect(initWordsProgress, []);

  const progresses = calculateProgresses();

  return (
    <div className={classes.root}>
      <div className={classes.statistic}>
        <div className={classes.statisticIcon}>
          <ChartDown />
          {progresses[0]}
        </div>
        <div className={classes.statisticIcon}>
          <ChartNeitral />
          {progresses[1]}
        </div>
        <div className={classes.statisticIcon}>
          <ChartUp />
          {progresses[2]}
        </div>
      </div>

      <div className={classes.words}>
        {WORDS.map((wordData, ind) => (
          <WordsPageWord
            key={ind}
            data={wordData}
            progress={wordsProgress[wordData.id]}
            isShowTranslates={isShowTranslates}
          />
        ))}
      </div>

      <div className={classes.toggleButtonBox}>
        <button className={classes.toggleButton} onClick={toggleShowTranslates}>
          {isShowTranslates ? "Թաքցնել" : "Ցուցադրել"} թարգմանությունը
        </button>
      </div>
    </div>
  );
}
