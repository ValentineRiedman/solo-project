import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getRain(){
    try{
        const response = yield axios.get( 'https://api.weather.gov/stations/KMSP/observations')//api call for Minneapolis rain
        yield put( { type: 'SET_RAIN', payload: response.data } )
    }catch(err){
        console.log(err);
        alert( 'nope' );
    }
}

function* rainSaga(){
    yield takeLatest('GET_RAIN', getRain);
}

export default rainSaga;