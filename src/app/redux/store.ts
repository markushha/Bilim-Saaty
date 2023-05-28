import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./theme/themeSlice";

// create combine reducers in the future

export const store = configureStore({
    reducer: themeSlice.reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
})