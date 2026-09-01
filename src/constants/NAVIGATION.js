// libs
import { NotepadText } from "lucide-react";
import { Settings } from "lucide-react";
import { ListTodo } from "lucide-react";

// constants
import ROUTES from "./ROUTES";

const NAVIGATION = [
  {
    to: ROUTES.QUIZ,
    title: "Quiz",
    icon: ListTodo,
  },
  {
    to: ROUTES.GRAMMAR,
    title: "Grammar",
    icon: NotepadText,
  },
  {
    to: ROUTES.SETTINGS,
    title: "Settings",
    icon: Settings,
  },
];

export default NAVIGATION;
