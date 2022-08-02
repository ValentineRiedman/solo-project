import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Grid, Paper } from "@material-ui/core";
import GardenItem from "../GardenItem/GardenItem";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name GardenList with the name for the new component.
function GardenList(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Functional Component");

  return (
    <div>
      <Container>
        <Grid
          container
          display={"flex"}
          wrap={"wrap"}
          justifyContent={"space-evenly"}
          alignContent={"center"}
          spacing={5}
          padding={5}
        >
          {props.garden.map((jardin) => {
            return (
              <div>
                <GardenItem key={jardin.id} jardin={jardin} />
              </div>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default GardenList;
