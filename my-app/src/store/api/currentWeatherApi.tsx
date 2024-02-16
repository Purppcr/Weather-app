import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {WeatherData} from "../../api/types";


// Define a service using a base URL and expected endpoints
export const currentWeatherApi = createApi({
        reducerPath: 'weatherApi',
        baseQuery: fetchBaseQuery({ baseUrl: 'http://api.weatherapi.com/v1' }),
        endpoints: (builder) => ({
            getWeatherByLocation: builder.query<WeatherData, string>({
            query: (location: string) => `/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}q=${location}&aqi=no`,
        }),
    }),
    })

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWeatherByLocationQuery } = currentWeatherApi