import React, { useState } from "react";
import CountryPicker from "./CountryPicker/CountryPicker";
import ChartCountry from "./ChartCountry/ChartCountry";
import Cards from "./Cards/Cards";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    text: {},
  },
});

function App() {
  const [chosenCountry, setCountry] = useState("");

  function handleChoose(country) {
    setCountry(country);
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography>Photos</Typography>
          </Toolbar>
        </AppBar>
        <div className="container">
          <Grid container spacing={1}>
            <Grid item xs={5}>
              <CountryPicker onchoose={handleChoose} />
            </Grid>
            <Grid item xs={9}>
              <ChartCountry country={chosenCountry} />
            </Grid>
            <Cards />
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

// https://covid19.mathdro.id/api

//https://codesandbox.io/s/material-demo-forked-vxnz7?file=/demo.js
// https://pomber.github.io/covid19/timeseries.json