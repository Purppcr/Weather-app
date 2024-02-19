import { configureStore } from "@reduxjs/toolkit";
import { WeatherAPI } from "./api/weatherApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import currentWeatherSlice from "./slices/currentWeatherSlice";


export const store = configureStore({
  reducer: {
    current: currentWeatherSlice,
    [WeatherAPI.reducerPath]: WeatherAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(WeatherAPI.middleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch