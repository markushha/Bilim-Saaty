import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./theme/themeSlice";
import authSlice from "./api/auth/authSlice";
import { client } from "./api/client";

// create combine reducers in the future
const reducers = combineReducers({
    theme: themeSlice.reducer,
    auth: authSlice
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(client.middleware),
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>;