import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  let arr = JSON.parse(localStorage.getItem('nameForData'));
  switch (action.type) {
    case FETCH_WEATHER:

      if (action.payload.data.cod === '200') {
        arr = [action.payload.data, ...arr];
        localStorage.setItem('nameForData', JSON.stringify(arr));

        return [action.payload.data, ...state];
      } else if (action.payload.data.cod === '404') {
        alert('Sorry, unable to find city');
      }

  }


  return state;
}
