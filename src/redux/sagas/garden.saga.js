import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { useReducer } from 'react';

function* getGarden(){
    try{
        const response = yield axios.get( "/api/garden" );
        console.log( "get all:", response.data );
        yield put( { type: 'SET_GARDEN', payload: response.data } );
    }catch(err){
        console.log(err);
        alert( 'get garden nope' );
    }
}

function* addGarden(action){
    try{
        const response = yield axios.post("/api/garden", action.payload );
        yield put ( { type: 'GET_GARDEN' } );
    }catch (error){
        console.log('Error in post', error);
        alert("nope adding garden");
    }
}

function* pruneGarden(action) {
  
  try{
    const response = yield axios.delete("/api/garden", action.payload.id );
    yield put({ type: 'GET_GARDEN' }); 
  }catch (error) {
    console.log('delete failed', error);
  }
}
function* gardenSaga(){
    yield takeLatest('GET_GARDEN', getGarden);
    yield takeLatest( 'ADD_VEGGIE', addGarden);
    yield takeLatest( 'PRUNE_VEGGIE', pruneGarden);
}

export default gardenSaga;