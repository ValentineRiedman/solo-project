import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch( { type: 'GET_VEGETABLES'});
    }, []);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
      <div className="gardenNotes">
        <h2>Garden Notes</h2>

      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
