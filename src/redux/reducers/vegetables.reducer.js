const vegetablesReducer = ( state =[], action ) =>{
  if( action.type === 'SET_VEGETABLES' ){
    console.log(action.payload);
      return action.payload;
      
  }
  return state;
}

// user will be on the redux state at:
// state.vegetables
export default vegetablesReducer;
