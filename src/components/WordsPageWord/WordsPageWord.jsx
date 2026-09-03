// libs

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

function ChartNeitral() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function ChartUp() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M16 7h6v6" />
      <path d="m22 7-8.5 8.5-5-5L2 17" />
    </svg>
  );
}

function ChartDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M16 17h6v-6" />
      <path d="m22 17-8.5-8.5-5 5L2 7" />
    </svg>
  );
}
