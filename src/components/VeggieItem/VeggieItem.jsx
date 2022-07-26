import { useState } from 'react';
import  React from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import { useDispatch} from 'react-redux';


function VeggieItem( props ){
    const [ show, setShow ] = useState( null )
    const dispatch = useDispatch();

    
    const addVeggie = () =>{
        console.log('this veggie is', props.veggie.veg_name );
        dispatch( { type: 'ADD_VEGGIE', } );
    }

    return (
        <Container>
            <Grid container display="flex" wrap="nowrap" justifyContent="center" spacing={3} >
                                
                                <Grid item key={props.veggie.id} >
                                    <Paper><p>{props.veggie.veg_name}</p><img src={props.veggie.images}/>
                                    <p>{props.veggie.water_needs}" of water required per week.</p>
                                    <p><button onClick={addVeggie} className="addButton">Add</button></p></Paper>
                                </Grid>
            </Grid>
         </Container>
    );
}



export default VeggieItem;