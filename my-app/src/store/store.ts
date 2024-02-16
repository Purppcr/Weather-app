import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import WeatherSlice from "./slices/WeatherSlice";
import { WeatherAPI } from "./api/weatherApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = () => ({
  weatherState: WeatherSlice,
  [WeatherAPI.reducerPath]: WeatherAPI.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    weatherState: WeatherSlice,
    [WeatherAPI.reducerPath]: WeatherAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(WeatherAPI.middleware),
});
setupListeners(store.dispatch);

export const persistor = persistStore(store);
