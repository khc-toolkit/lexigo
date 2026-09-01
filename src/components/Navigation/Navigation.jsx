// libs
import { Link, useLocation } from "react-router-dom";

// constants
import NAVIGATION from "../../constants/NAVIGATION";

// styles
import classes from "./styles.module.css";

export default function Navigation() {
  const { pathname } = useLocation();

  const AMOUNT_LINK = NAVIGATION.length;

  return (
    <div
      className={classes.root}
      style={{ gridTemplateColumns: `repeat(${AMOUNT_LINK}, 1fr)` }}
    >
      {NAVIGATION.map((nav) => (
        <Link
          to={nav.to}
          key={nav.to}
          className={`${classes.link} ${pathname === nav.to && classes.linkActive}`}
        >
          <nav.icon size={40} className={classes.icon} />
          <span className={classes.title}>{nav.title}</span>
        </Link>
      ))}
    </div>
  );
}
