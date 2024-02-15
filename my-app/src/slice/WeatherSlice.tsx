import {createSlice} from '@reduxjs/toolkit';

interface IState {
    weatherCurrent: object | null,
    weatherForecast: object | null
}

const initialState: IState  = {
    weatherCurrent: null,
    weatherForecast: null
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeatherCurrent: (state, action) => (
            {
                ...state,
                weatherCurrent: action.payload
            }
        ),
        setWeatherForecast: (state, action) => (
            {
                ...state,
                weatherForecast: action.payload
            }),
    },
});


export const {actions: weatherActions, reducer: weatherReducer} = weatherSlice;
