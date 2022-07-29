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
  const [heading, setHeading] = useState('Create Garden');

  useEffect(() =>{
    dispatch( { type: 'GET_VEGETABLES'});
    dispatch( { type: 'GET_GARDEN'});
}, []);

  return (
    <div>
    <div>
      <p></p>
      <h2 className="heading">{heading}</h2>
      <n/>
      <VeggieList vegetable={store}/>  
    </div>
    <div className="seeButton">    
    </div>
    </div>
  );
}

export default CreateGarden;
