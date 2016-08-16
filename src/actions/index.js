import axios from 'axios';
import { isFSA } from 'flux-standard-action';

const API_KEY = '79f510911f62a9238f41c40ebc858837';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(data) {
  const city = data.split(',')[0];
  const country = data.split(',')[1];
  const url = `${ROOT_URL}&q=${city},${country}`;
  const request = axios.get(url);

  console.log(isFSA({
    type: FETCH_WEATHER,
    payload: request,
  }));
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
