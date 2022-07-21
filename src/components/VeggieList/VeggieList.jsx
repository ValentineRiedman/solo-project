import React, { useState } from 'react';
import {  useSelector } from 'react-redux';
import VeggieItem from '../VeggieItem/VeggieItem';

function VeggieList( props ){
    const [ heading, setHeading ] = useState('VeggieList');

    const store = useSelector((store) => store);
   
    return (
        <div>
            {/* <h2>{heading}</h2> */}
            {props.vegetable.map(veggie =>(<VeggieItem key={veggie.id} veggie={veggie}/>))}
                            {/*mapping through the vegetables db info from vegetables table*/ }                                    
        </div>
    );
}

export default VeggieList;