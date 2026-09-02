// libs
import { Outlet } from "react-router-dom";

// components
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";

// hooks
import useAppInitializer from "../../hooks/useAppInitializer";

// styles
import classes from "./styles.module.css";

export default function HomePage() {
  const [isAppInitialized] = useAppInitializer();

  return (
    <div className={classes.root}>
      <Header />

      <main className={classes.main}>{isAppInitialized && <Outlet />}</main>

      <Navigation />
    </div>
  );
}
