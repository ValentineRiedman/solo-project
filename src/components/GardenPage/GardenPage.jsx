import React, { useState, useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import GardenList from "../GardenList/GardenList";
import WeatherPage from "../WeatherPage/WeatherPage";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name GardenPage with the name for the new component.
function GardenPage(props) {
  const dispatch = useDispatch();
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store.garden);
  const user = useSelector((store) => store.user);
  const [heading, setHeading] = useState("Garden");

  useEffect(() => {
    dispatch({ type: "GET_GARDEN" });
    dispatch({ type: "GET_VEGETABLES" });
  }, []);

  return (
    <div>
      <h2 className="heading">
        {user.username}'s {heading}
      </h2>
      <WeatherPage />
      <GardenList garden={store} />
    </div>
  );
}

export default GardenPage;
