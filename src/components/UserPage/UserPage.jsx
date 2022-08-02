import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const garden = useSelector((store) => store.garden);

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch( { type: 'GET_VEGETABLES'});
    dispatch( { type: 'GET_GARDEN'});

    }, []);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
      <div className="gardenNotes">
        <h2>Garden Notes</h2>
      {garden.map((jardins) => (
        <div key={jardins.id}>
          <p>{jardins.veg_name} : {jardins.notes}</p>
        </div>
      ))}

      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
