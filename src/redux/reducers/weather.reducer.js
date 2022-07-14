const weatherReducer = ( state =[], action ) =>{
  if( action.type === 'SET_WEATHER' ){
      return action.payload;
  }
  return state;
}

// user will be on the redux state at:
// state.user
export default weatherReducer;
