// libs
import { configureStore } from "@reduxjs/toolkit";

// slices
import settingsSlice from "./slices/settingsSlice";

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
