// libs
import { useState } from "react";

export default function useSettings(settingData) {
  const { key, initValue } = settingData;
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) ?? initValue,
  );

  const updateValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  const toggleValue = () => {
    setValue((prevValue) => {
      const newValue = !prevValue;
      localStorage.setItem(key, JSON.stringify(newValue));
      return newValue;
    });
  };

  return { value, updateValue, toggleValue };
}
