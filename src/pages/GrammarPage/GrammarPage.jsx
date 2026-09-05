// libs
import { useState } from "react";

// components
import TenseItem from "../../components/TenseItem";

// constants
import GRAMMAR from "../../constants/GRAMMAR";

// styles
import classes from "./styles.module.css";

export default function GrammarPage() {
  const [activeTenseInd, setActiveTenseInd] = useState(-1);
  const activeTense = GRAMMAR[activeTenseInd];

  const prevTab = () => {
    setActiveTenseInd((prev) => prev - 1);
  };

  const nextTab = () => {
    setActiveTenseInd((prev) => prev + 1);
  };

  const isDisabledPrev = activeTenseInd - 1 === -1;
  const isDisabledNext = activeTenseInd + 1 === GRAMMAR.length;

  return (
    <div className={classes.root}>
      {activeTenseInd > -1 ? (
        <>
          <button
            className={classes.backButton}
            onClick={() => setActiveTenseInd(-1)}
          >
            Վերադառնալ
          </button>
          <div>
            <h2>{activeTense.title}</h2>
          </div>

          <div className={classes.items}>
            {activeTense.data.map((tenseData, ind) => (
              <TenseItem tenseData={tenseData} key={ind} />
            ))}
          </div>

          <div className={classes.navigationButtons}>
            <button
              className={classes.navigationButton}
              disabled={isDisabledPrev}
              onClick={prevTab}
            >
              {"<-"} Prev
            </button>
            <button
              className={classes.navigationButton}
              disabled={isDisabledNext}
              onClick={nextTab}
            >
              Next {"->"}
            </button>
          </div>
        </>
      ) : (
        <div className={classes.grammars}>
          {GRAMMAR.map((gramData, ind) => (
            <button
              onClick={() => setActiveTenseInd(ind)}
              className={classes.grammarButton}
              key={ind}
            >
              {gramData.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
