// libs
import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState: {
    settings: {},
  },
  reducers: {
    setOptionAction(state, { payload }) {
      const { key, value } = payload;
      state.settings[key] = value;
    },

    delOptionAction(state, { payload }) {
      const { key } = payload;
      delete state.settings[key];
    },

    setSettingsAction(state, { payload }) {
      state.settings = payload;
    },
  },
});

export default settingsSlice.reducer;
export const { setOptionAction, delOptionAction, setSettingsAction } =
  settingsSlice.actions;
