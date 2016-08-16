import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  let arr = JSON.parse(localStorage.getItem('nameForData'));
  switch (action.type) {
    case FETCH_WEATHER:

      if (action.payload.data.cod === '200') {  
        //prevention of data duplication
        const name = action.payload.data.city.name;
        for (const element of arr) {
          if (element.city.name === name) {
            arr.splice(arr.indexOf(element), 1);
            localStorage.nameForData = JSON.stringify(arr);
          }
        }     


        arr = [action.payload.data, ...arr];
        localStorage.setItem('nameForData', JSON.stringify(arr));

        return [action.payload.data, ...state];
      } else if (action.payload.data.cod === '404') {
        alert('Sorry, unable to find city');
      }
  }


  return state;
}
