// constants
import WORDS from "../../constants/WORDS";

// styles
import classes from "./styles.module.css";

export default function WordsPage() {
  return (
    <div className={classes.root}>
      {WORDS.map((wordData, ind) => (
        <div key={ind} className={classes.wordBox}>
          <p className={classes.word}>{wordData.word}</p>
          <p className={classes.translate}>{wordData.translate}</p>
        </div>
      ))}
    </div>
  );
}
