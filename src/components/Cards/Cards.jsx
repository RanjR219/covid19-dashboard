import React, { useState } from "react";
import "./Cards.css";
import Grid from "@material-ui/core/Grid";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";

function Cards(props) {
  const [stats, setStats] = useState({});

  React.useEffect(() => {
    if (props.country !== "") {
      fetch(`https://pomber.github.io/covid19/timeseries.json`)
        .then((results) => results.json())
        .then((response) => {
          console.log(response[props.country].slice(-1)[0]);
          const modified = {
            confirmed: response[props.country].slice(-1)[0].confirmed,
            recovered: response[props.country].slice(-1)[0].recovered,
            death: response[props.country].slice(-1)[0].deaths,
            lastUpdate: response[props.country].slice(-1)[0].date,
          };

          setStats(modified);
        });
    }
  }, [props.country]);

  return (
    <Grid item xs={3}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card className="card">
            <CardActionArea>
              <CardContent>
                <Typography>Confirmed</Typography>
                <Typography>
                  {stats.confirmed}
                  <div>last updated: {stats.lastUpdate}</div>
                  {/* {modify.confirmed.value} */}
                  {/* {new Date(modify.lastUpdate).toDateString()} */}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className="card">
            <CardActionArea>
              <CardContent>
                <Typography>Recovered</Typography>
                <Typography>
                  {stats.recovered}
                  <div>last updated: {stats.lastUpdate}</div>
                  {/* {modify.recovered.value}
                  {new Date(modify.lastUpdate).toDateString()} */}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className="card">
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  deaths
                </Typography>
                <Typography component="p">
                  {stats.death}
                  <div>last updated: {stats.lastUpdate}</div>
                  {/* {modify.deaths.value}
                  {new Date(modify.lastUpdate).toDateString()} */}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Cards;
