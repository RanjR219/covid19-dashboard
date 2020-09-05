import React, { useState } from "react";
import "./Cards.css";
import Grid from "@material-ui/core/Grid";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";

function Cards() {
  const [stats, setStats] = useState({});

  React.useEffect(() => {
    fetch(`https://covid19-ra-api.herokuapp.com/status`)
      .then((results) => results.json())
      .then((response) => {
        setStats(response);
      });
  }, []);

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
                <Typography variant="body2" component="p">
                  {stats.death}
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
