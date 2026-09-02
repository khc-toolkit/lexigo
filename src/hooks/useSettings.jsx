// hooks
import useRedux from "./useRedux";

// slice actions
import {
  setOptionAction,
  delOptionAction,
} from "../store/slices/settingsSlice";

export default function useSettings(settingData) {
  const { rData, dispatch } = useRedux("settingsSlice");
  const settings = rData.settings;

  const { key } = settingData;
  const value = settings[key];

  const setValue = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    dispatch(setOptionAction({ key, value }));
  };

  const toggleValue = () => {
    setValue(!value);
  };

  const deleteOption = () => {
    dispatch(delOptionAction({ key }));
  };

  return { value, setValue, toggleValue, deleteOption };
}
