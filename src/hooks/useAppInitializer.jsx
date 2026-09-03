// libs
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

// constants
import SETTINGS from "../constants/SETTINGS";

// slice actions
import { setSettingsAction } from "../store/slices/settingsSlice";

export default function useAppInitializer() {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);

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

    // end initialization
    setStatus(true);
  }, []);

  return [status];
}
