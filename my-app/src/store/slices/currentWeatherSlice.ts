import {PayloadAction, createSlice, CaseReducer, Slice} from "@reduxjs/toolkit";
import { WeatherData } from "../api/types";
import { WeatherAPI } from "../api/weatherApi";

const initialState: WeatherData | null = null

const currentWeatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder.addMatcher(
      WeatherAPI.endpoints.getWeatherByLocation.matchFulfilled,
      (state, action) => {
        return action.payload
      }
    );
  },
});

export default currentWeatherSlice.reducer;
