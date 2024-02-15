import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WeatherData } from "../../api/types";

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
});

export const { setWeatherCurrent, setWeatherForecast } = weatherSlice.actions;

export default weatherSlice.reducer;
