// libs
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";

// constants
import SETTINGS from "../constants/SETTINGS";
import { defaultRoute } from "../constants/ROUTES";

// slice actions
import { setSettingsAction } from "../store/slices/settingsSlice";

export default function useAppInitializer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = useRef(false);

  useEffect(() => {
    // SETTINGS
    const settings = {};

    for (const [key, { initValue }] of Object.entries(SETTINGS)) {
      try {
        settings[key] = JSON.parse(localStorage.getItem(key)) ?? initValue;
      } catch {
        settings[key] = initValue;
      }
    }

    dispatch(setSettingsAction(settings));

    status.current = true;
    navigate(defaultRoute);
  }, []);

  return [status.current];
}
