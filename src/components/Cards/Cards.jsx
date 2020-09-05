import React from "react";
import "./Cards.css";
import Grid from "@material-ui/core/Grid";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";

function Cards() {
  return (
    <Grid item xs={3}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card className="card">
            <CardActionArea>
              <CardContent>
                <Typography>Confirmed</Typography>
                <Typography>
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
