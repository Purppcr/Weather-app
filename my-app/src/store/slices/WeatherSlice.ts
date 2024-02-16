import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WeatherData } from "../api/types";
import { WeatherAPI } from "../api/weatherApi";

interface IState {
  weatherCurrent: WeatherData | null;
  weatherForecast: WeatherData | null;
}

const initialState: IState = {
  weatherCurrent: null,
  weatherForecast: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherCurrent: (state, action: PayloadAction<WeatherData>) => ({
      ...state,
      weatherCurrent: action.payload,
    }),
    setWeatherForecast: (state, action: PayloadAction<WeatherData>) => ({
      ...state,
      weatherForecast: action.payload,
    }),
  },
  extraReducers(builder) {
    builder.addMatcher(
      WeatherAPI.endpoints.getWeatherByLocation.matchFulfilled,
      (state, action) => {
        return {
          ...state,
          weatherForecast: action.payload,
        };
      }
    );
  },
});

export const { setWeatherCurrent, setWeatherForecast } = weatherSlice.actions;

export default weatherSlice.reducer;
