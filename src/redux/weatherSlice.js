import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cities from '../data/db.json';
import axios from 'axios';

const initialState = {
    cities,
    weatherData: [],
    currentCity: 'Ankara',
    isFetch: false
};

const { REACT_APP_API_KEY } = process.env;

export const fetchWeatherData = createAsyncThunk(
    'fetchWeatherData',
    async (data, { getState }) => {
        const { weather } = getState();
        let wantedCity;

        weather.cities.map((city) => {
            if (city.id === data) {
                wantedCity = city;
            }
        });

        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${wantedCity.lat}&lon=${wantedCity.lon}&appid=${REACT_APP_API_KEY}&exclude=minutely&units=metric`
        );

        const { current } = response.data;

        return {
            city: wantedCity.id,
            current,
        };
    }
);


const weatherSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setApi: (state, action) => {
            state.api.key = action.payload;
            sessionStorage.setItem('apiKey', JSON.stringify(state.api.key));
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeatherData.pending, (state, action) => {
            state.isFetch = false;
        });
        builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
            state.currentCity = action.payload.city;
            state.weatherData = action.payload;
            state.isFetch = true;
        });
    },
});

export const { setApi } = weatherSlice.actions;

export default weatherSlice.reducer;