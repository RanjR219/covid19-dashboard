import React, { useState } from "react";
import { Line } from "react-chartjs-2";

function ChartCountry(props) {
  const [reports, setReports] = useState([]);

  React.useEffect(() => {
    if (props.country !== "") {
      fetch(`https://pomber.github.io/covid19/timeseries.json`)
        .then((results) => results.json())
        .then((response) => {
          const modifiedData = response[props.country].map((reports) => ({
            confirmed: reports.confirmed,
            deaths: reports.deaths,
            date: reports.date,
          }));

          setReports(modifiedData);
        });
    }
  }, [props.country]);

  console.log(props.country);

  const lineChart = (
    <Line
      data={{
        labels: reports.map((date) => date.date),
        datasets: [
          {
            data: reports.map((confirmeddata) => confirmeddata.confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: reports.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  );
  return lineChart;
}

export default ChartCountry;
