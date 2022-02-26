import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CardItem from "./CardItem";

const Cards = ({ data: { confirmed, deaths, lastUpdate } }) => {
  
  if (!confirmed) {
    return 'Loading...';
  }

  const covidData = [
    {
      id: 1,
      title: 'Infected',
      subTitle: 'Number of active cases of COVID-19',
      total: confirmed.value,
      date: new Date(lastUpdate).toDateString(),
      class: styles.infected
    },
    {
      id: 2,
      title: 'Deaths',
      subTitle: 'Number of deaths caused by COVID-19',
      total: deaths.value,
      date: new Date(lastUpdate).toDateString(),
      class: styles.deaths
    },
  ]

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        <CardItem covidData={covidData} />
      </Grid>
    </div>
  );
};

export default Cards;
