import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
  //reducers should work only with data, not promises
  switch(action.type){
    case FETCH_WEATHER :
      //we are creating a entire new array
      return state.concat([action.payload.data]);
      //ESX6 [action.payload.data, ...state];
  }
  return state;
}
