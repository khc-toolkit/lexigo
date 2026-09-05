// hooks
import useQuiz from "../../hooks/useQuiz";

// styles
import classes from "./styles.module.css";

export default function QuizWord({ inputWords, goBackToOptions }) {
  const {
    wInd,
    words,
    isEnd,
    rightTranslates,
    selectedVariant,
    currentWordData,
    isShowRightVersion,
    selectVariant,
  } = useQuiz(inputWords);

  return (
    <div className={classes.root}>
      {isEnd ? (
        <div className={classes.endBox}>
          <div className={classes.end}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-check"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>

          <button className={classes.endBackButton} onClick={goBackToOptions}>
            Վերադառնալ
          </button>
        </div>
      ) : (
        <>
          <div className={classes.wordBox}>
            <p className={classes.word}>{currentWordData.word}</p>
            <p>{`${wInd + 1} / ${words.length}`}</p>
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
        </>
      )}
    </div>
  );
}
