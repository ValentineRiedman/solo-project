import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getVegetables(){
    try{
        const response = yield axios.get( "/api/vegetables" );
        console.log( "get all:", response.data );
        yield put( { type: 'SET_VEGETABLES', payload: response.data } );
    }catch(err){
        console.log(err);
        alert( 'veggie nope' );
    }
}

function* vegetablesSaga(){
    yield takeLatest('GET_VEGETABLES', getVegetables);
}

export default vegetablesSaga;