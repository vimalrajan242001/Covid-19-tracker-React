import React from "react";
import style from "./Cards.module.css";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...!";
  }
  return (
    <div>
      <Card className={cx(style.root, style.confirmed)} variant="outlined">
        <Grid container item justify="center" xs={12} md={12}>
          <CardContent>
            <Typography   gutterBottom>
              confirmed
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography  >
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography  >
              Number of active corona cases
            </Typography>
          </CardContent>
        </Grid>
      </Card>
      <Card className={cx(style.root, style.recovered)} variant="outlined">
        <Grid container item justify="center" xs={12} md={12}>
          <CardContent>
            <Typography   gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography  >
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography  >
              Number of active corona cases
            </Typography>
          </CardContent>
        </Grid>
      </Card>

      <Card className={cx(style.root, style.death)} variant="outlined">
        <Grid container item justify="center" xs={12} md={12}>
          <CardContent>
            <Typography   gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography  >
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography  >
              Number of active corona cases
            </Typography>
          </CardContent>
        </Grid>
      </Card>
    </div>
  );
};

export default Cards;
