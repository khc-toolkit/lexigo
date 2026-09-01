// libs
import { Routes, Route } from "react-router-dom";

// pages
import NotFoundPage from "./NotFoundPage";
import HomePage from "./HomePage";
import GrammarPage from "./GrammarPage";
import SettingsPage from "./SettingsPage";
import QuizPage from "./QuizPage";
import WordsPage from "./WordsPage";

// components
import AppInitializer from "../components/AppInitializer";

// constants
import ROUTES from "../constants/ROUTES";

export default function Pages() {
  return (
    <Routes>
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />

      <Route path={ROUTES.HOME} element={<HomePage />}>
        <Route index element={<AppInitializer />} />
        <Route path={ROUTES.GRAMMAR} element={<GrammarPage />} />
        <Route path={ROUTES.QUIZ} element={<QuizPage />} />
        <Route path={ROUTES.WORDS} element={<WordsPage />} />
        <Route path={ROUTES.SETTINGS} element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}
