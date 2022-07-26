import React, { useState, useEffect } from 'react';
import {  useSelector } from 'react-redux';
import VeggieItem from '../VeggieItem/VeggieItem';
import { Container, Grid, Paper } from '@material-ui/core';
import WeatherPage from '../WeatherPage/WeatherPage';

function VeggieList( props ){
    const [ heading, setHeading ] = useState('VeggieList');

    const store = useSelector((store) => store);

    useEffect(() =>{
        console.log('this the console log of props:', props);
      }, []);
//     <div>


            
//     {/* {props.vegetable.map(veggie =>(<VeggieItem key={veggie.id} veggie={veggie}/>))}
//                     {/*mapping through the vegetables db info from vegetables table*/ }                             
// </div>
   
    return (
        <Grid container display={"flex"} wrap={"wrap"} justifyContent={"space-evenly"} alignContent={"center"} spacing={5} padding={5}>
        {props.vegetable.map((veggie) => {
          return(
              <div>
                <VeggieItem key={veggie.id} veggie={veggie}/>
              </div>
          );
        })}
      </Grid>
    );
}

export default VeggieList;