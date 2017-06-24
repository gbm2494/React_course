//all reducers have 2 arguments
//currentState and action
//reducers are only occur when an action happens
//state argumen is not app state, only the state
//this reducer is responsible for
//state value of last iteration
export default function(state = null, action){
  switch(action.type){
    case 'BOOK_SELECTED' :
      return action.payload;
  }

  return state;
}
