import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getWeather(){
    try{
        const response = yield axios.get( 'https://api.weather.gov/gridpoints/MPX/108,69/forecast/')//api call for Minneapolis
        yield put( { type: 'SET_WEATHER', payload: response.data } )
    }catch(err){
        console.log(err);
        alert( 'nope weather' );
    }
}

function* weatherSaga(){
    yield takeLatest('GET_WEATHER', getWeather);
}

export default weatherSaga;