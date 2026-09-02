// libs
import { configureStore } from "@reduxjs/toolkit";

// slices
import settingsSlice from "../store/slices/settingsSlice";

const store = configureStore({
  reducer: {
    settingsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
