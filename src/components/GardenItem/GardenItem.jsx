import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Container, Grid, Paper } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name GardenItem with the name for the new component.
function GardenItem(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [ note, setNote] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteVeggie = () =>{
    console.log('this veggie is', props.jardin.id );
    dispatch( { type: 'PRUNE_VEGGIE', payload: props.jardin.id } );
    dispatch( { type: 'GET_GARDEN'});
}

const changeNote = ( event ) => {
  setNote( event.target.value);
  console.log( note );
}

const addNote = ()=>{
  console.log('this veggie is', note );
  dispatch( { type: 'ADD_NOTE', payload: note } );
}


  return (
    <Container>
            <Grid container display="flex" wrap="wrap" justifyContent="center" spacing={5} >
                                
                                <Grid item key={props.jardin.id} >
                                    <p>{props.jardin.veg_name}</p><img className="images" src={props.jardin.images_planted}/>
                                    <p>{props.jardin.water_needs}" of water required per week.</p>
                                    <p><button onClick={deleteVeggie} className="deleteButton">it dead</button>
                                    <input size="8" placeholder="note" onChange={changeNote}></input><button onClick={addNote}>Add Note</button></p>
                                </Grid>
            </Grid>
         </Container>
  );
}

export default GardenItem;
