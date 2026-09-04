// components
import ChartNeitral from "../ChartNeitral";
import ChartDown from "../ChartDown";
import ChartUp from "../ChartUp";

// styles
import classes from "./styles.module.css";

export default function WordsPageWord({ data, progress, isShowTranslates }) {
  const { word, translate } = data;

  let icon = null;
  let progressClassName = "";

  if (progress === 0) {
    icon = ChartNeitral();
    progressClassName = classes.progressNeitral;
  } else if (progress > 0) {
    icon = ChartUp();
    progressClassName = classes.progressUp;
  } else if (progress < 0) {
    icon = ChartDown();
    progressClassName = classes.progressDown;
  }

  return (
    <div
      className={`${classes.wordBox} ${!isShowTranslates && classes.wordBoxHideTranslate}`}
    >
      <div className={`${classes.progress} ${progressClassName}`}>{icon}</div>

      <p className={`${classes.word} ${!isShowTranslates && classes.onlyWord}`}>
        {word}
      </p>

      <p
        className={`${classes.translate} ${!isShowTranslates && classes.hideTranslate}`}
      >
        {translate}
      </p>
    </div>
  );
}
