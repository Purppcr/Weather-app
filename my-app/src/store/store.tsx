import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import WeatherSlice from "./slices/WeatherSlice";
import {currentWeatherApi} from "./api/currentWeatherApi";
import {setupListeners} from "@reduxjs/toolkit/query";

const rootReducer = () => ({
  weatherState: WeatherSlice,
  [currentWeatherApi.reducerPath]: currentWeatherApi.reducer
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(currentWeatherApi.middleware),
});
setupListeners(store.dispatch)

export const persistor = persistStore(store);
