// libs
import { useState } from "react";

// components
import TenseItem from "../../components/TenseItem";

// constants
import GRAMMAR from "../../constants/GRAMMAR";

// styles
import classes from "./styles.module.css";

export default function GrammarPage() {
  const [activeTenseInd, setActiveTenseInd] = useState(0);

  const activeTense = GRAMMAR[activeTenseInd];

  return (
    <div className={classes.root}>
      <div>
        <h2>{activeTense.title}</h2>
      </div>

      <div className={classes.items}>
        {activeTense.data.map((tenseData, ind) => (
          <TenseItem data={tenseData} key={ind} />
        ))}
      </div>
    </div>
  );
}
