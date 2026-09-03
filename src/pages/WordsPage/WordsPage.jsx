// libs
import { useEffect } from "react";

// components
import WordsPageWord from "../../components/WordsPageWord";

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

  const { wordsProgress, initWords } = useWordsProgress();

  useEffect(initWords, []);

  return (
    <div className={classes.root}>
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
