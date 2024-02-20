import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WeatherData, getWeatherByLocationRequest } from "./types";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// Define a service using a base URL and expected endpoints
export const WeatherAPI = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://api.weatherapi.com/v1" }),
  endpoints: (builder) => ({
    getWeatherByLocation: builder.query<any, getWeatherByLocationRequest>({
      query: (location: getWeatherByLocationRequest) =>
        `/current.json?key=${API_KEY}&q=${
          location.latitude + "," + location.longitude
        }&aqi=no`,
    }),
  }),
});
export const { useGetWeatherByLocationQuery } = WeatherAPI;
