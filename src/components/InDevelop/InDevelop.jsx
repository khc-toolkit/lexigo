// libs
import { Lock } from "lucide-react";

// styles
import classes from "./styles.module.css";

export default function InDevelop() {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Lock size={40} />
        <p>In Development</p>
      </div>
    </div>
  );
}
