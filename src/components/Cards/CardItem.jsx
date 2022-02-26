import React from "react";
import CountUp from "react-countup";
import cx from "classnames";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";

const CardItem = ({ covidData }) => {
  return (
    <React.Fragment>
      {covidData.map((data) => (
        <Grid
          key={data.id}
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, data.class)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {data.title}
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={data.total}
                duration={2.5}
                separator="."
              />
            </Typography>
            <Typography color="textSecondary">{data.date}</Typography>
            <Typography variant="body2">{data.subTitle}</Typography>
          </CardContent>
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default CardItem;
