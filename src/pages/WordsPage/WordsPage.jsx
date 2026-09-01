// hooks
import useSettings from "../../hooks/useSettings";

// constants
import WORDS from "../../constants/WORDS";
import SETTINGS from "../../constants/SETTINGS";

// styles
import classes from "./styles.module.css";

export default function WordsPage() {
  const { value: isShowTranslates, toggleValue: toggleShowTranslates } =
    useSettings(SETTINGS.showTranslates);

  return (
    <div className={classes.root}>
      <div className={classes.words}>
        {WORDS.map((wordData, ind) => (
          <div
            key={ind}
            className={`${classes.wordBox} ${!isShowTranslates && classes.wordBoxHideTranslate}`}
          >
            <p
              className={`${classes.word} ${!isShowTranslates && classes.onlyWord}`}
            >
              {wordData.word}
            </p>
            <p
              className={`${classes.translate} ${!isShowTranslates && classes.hideTranslate}`}
            >
              {wordData.translate}
            </p>
          </div>
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
