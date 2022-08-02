import { useState } from "react";
import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";

function VeggieItem(props) {
  const [show, setShow] = useState(null);
  const dispatch = useDispatch();

  const addVeggie = () => {
    console.log("this veggie is", props.veggie.id);
    dispatch({ type: "ADD_VEGGIE", payload: props.veggie });
  };

  return (
    <Container>
      <Grid
        className="veggieSeed"
        container
        display="flex"
        wrap="wrap"
        justifyContent="center"
        spacing={5}
      >
        <Grid item key={props.veggie.id}>
          <p>{props.veggie.veg_name}</p>
          <img className="images" src={props.veggie.images} />
          <p>{props.veggie.water_needs}" of water required per week.</p>
          <p>
            <button onClick={addVeggie} className="addButton">
              Add
            </button>
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}

export default VeggieItem;
