import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import VeggieList from '../VeggieList/VeggieList';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name CreateGarden with the name for the new component.
function CreateGarden(props) {
  const dispatch = useDispatch();
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector(store => store.vegetables)
  const [heading, setHeading] = useState('Functional Component');

  useEffect(() =>{
    dispatch( { type: 'GET_VEGETABLES'});
}, []);

  return (
    <div>
      <p></p>
      <h2>{heading}</h2>
      <VeggieList vegetable={store}/>
    </div>
  );
}

export default CreateGarden;
