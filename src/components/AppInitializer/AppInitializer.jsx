// libs
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// constants
import ROUTES from "../../constants/ROUTES";

// styles
import classes from "./styles.module.css";

export default function AppInitializer() {
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: loading local storage data
    navigate(ROUTES.GRAMMAR);
  }, []);

  return <div className={classes.root}>Wait..</div>;
}
