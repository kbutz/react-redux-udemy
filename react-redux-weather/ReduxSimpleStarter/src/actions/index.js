import axios from 'axios';

const API_KEY = '0117bf81e4cbdc2ac2892799d1392ee4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Action creators always have to return an action. An Action is an object that always has to have a type.
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`
    const request = axios.get(url);

    console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}