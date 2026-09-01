// libs
import { Outlet } from "react-router-dom";

// components
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";

// styles
import classes from "./styles.module.css";

export default function HomePage() {
  return (
    <div className={classes.root}>
      <Header />

      <main className={classes.main}>
        <Outlet />
      </main>

      <Navigation />
    </div>
  );
}
