import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  let arr = JSON.parse(localStorage.getItem('nameForData'));
  switch (action.type) {
    case FETCH_WEATHER:
      arr = [action.payload.data, ...arr];
      localStorage.setItem('nameForData', JSON.stringify(arr));

      return [action.payload.data, ...state];
  }


  return state;
}
