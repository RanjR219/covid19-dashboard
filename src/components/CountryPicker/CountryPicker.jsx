import React, { useEffect, useState } from "react";
import "./CountryPicker.css";
import { NativeSelect, FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function CountryPicker(props) {
  const [countryList, setCountryList] = useState([]);
  const [chosenCountry, setChosenCountry] = useState("");

  function handleChange(event) {
    const chosenCountry = event.target.value;
    setChosenCountry(chosenCountry);
    props.onchoose(chosenCountry);
  }

  React.useEffect(() => {
    fetch(`https://covid19.mathdro.id/api/countries`)
      .then((results) => results.json())
      .then((response) => {
        const countries = response.countries.map((eachCountry) => {
          return eachCountry.name;
        });

        setCountryList(countries);
      });
  }, [setCountryList]);

  return (
    <FormControl className="countryPicker">
      <InputLabel id="inputCountry">Select Country</InputLabel>
      <Select
        labelId="inputCountry"
        id="demo-simple-select"
        value={chosenCountry}
        onChange={handleChange}
      >
        {countryList.map((country, i) => (
          <MenuItem key={i} value={country}>
            {country}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CountryPicker;
