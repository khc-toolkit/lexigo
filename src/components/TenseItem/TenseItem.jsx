// constants
import { grammarTypes } from "../../constants/GRAMMAR";

// styles
import classes from "./styles.module.css";

export default function TenseItem({ tenseData }) {
  const { type, data } = tenseData;

  switch (type) {
    case grammarTypes.toBe: {
      return (
        <div className={`${classes.root} ${classes.toBe}`}>
          <h4>To Be</h4>
          <p>{data}</p>
        </div>
      );
    }

    case grammarTypes.header: {
      return (
        <div className={`${classes.root} ${classes.header}`}>
          <h3>{data}</h3>
        </div>
      );
    }

    case grammarTypes.sentenseExample: {
      const { singular, plural } = data;

      const ListBox = ({ title, list }) => {
        return (
          <div className={classes.listBox}>
            <p className={classes.title}>{title}</p>
            <div className={classes.list}>
              {list.map((item, ind) => (
                <p className={classes.listItem} key={ind}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        );
      };

      return (
        <div className={`${classes.root} ${classes.sentenseExample}`}>
          <ListBox title="Singular" list={singular} />
          <ListBox title="Plural" list={plural} />
        </div>
      );
    }

    case grammarTypes.hintWords: {
      return (
        <div className={`${classes.root} ${classes.hintWords}`}>
          <p className={classes.headerText}>Reminder words</p>
          <div className={classes.words}>
            {data.map((word, ind) => (
              <p className={classes.word} key={ind}>
                {word}
              </p>
            ))}
          </div>
        </div>
      );
    }

    case grammarTypes.shortVersion: {
      return (
        <div className={`${classes.root} ${classes.shortVersion}`}>
          <p className={classes.headerText}>Short version</p>

          {data.map((versionData, ind) => (
            <div className={classes.version} key={ind}>
              <p className={`${classes.versionText} ${classes.long}`}>
                {versionData[0]}
              </p>

              <p className={`${classes.versionText} ${classes.short}`}>
                {versionData[1]}
              </p>
            </div>
          ))}
        </div>
      );
    }

    case grammarTypes.rule: {
      return (
        <div className={`${classes.root} ${classes.rule}`}>
          <p className={classes.ruleText}>{data}</p>
        </div>
      );
    }

    case grammarTypes.rules: {
      return (
        <div className={`${classes.root} ${classes.rules}`}>
          <p className={classes.headerText}>Rules</p>
          {data.map((line, ind) => (
            <div key={ind} className={classes.ruleItemsContainer}>
              {line.split("\n").map((item, ind_2) => (
                <p className={classes.ruleItem} key={ind_2}>
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      );
    }

    default: {
      return <p>(undedined type: {type})</p>;
    }
  }
}
