import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import weather from './weather.reducer';
import vegetables from './vegetables.reducer';
import rain from './rain.reducer';
import garden from'./garden.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  weather, //will display weather through api call
  vegetables, //will display vegetables from vegetable table
  rain,//will display rain totals of the last 6 hours
  garden,//will display the garden of the user
});

export default rootReducer;
