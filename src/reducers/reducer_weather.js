import {FETCH_WEATHER} from '../actions/index';

export default function (state=[], action){
	
	switch(action.type){
		case FETCH_WEATHER:
		
		
			var arr = JSON.parse(localStorage.getItem('nameForData'));
			
			arr = [action.payload.data, ...arr];
		
			localStorage.setItem('nameForData', JSON.stringify(arr));

			
			//localStorage.setItem('nameForData', JSON.stringify(this.props.weather));
			console.log(arr);
			return [action.payload.data, ...state];
	}


	return state;
}