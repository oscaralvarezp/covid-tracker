import React from 'react'

import { Cards, Chart, CountryPicker } from "./components";
import styles from './App.module.css'

import { fetchData } from './api';

import covidImage from './images/covid-image.png'

class App extends React.Component {
  // Estado del Componente
  state = {
    data: {},
    country: '',
  }

  // Se ejecuta cuando el componente es montado
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  // funcion que verifica el pais que seleccione en el picker para luego hacer una peticion a la api y devolver los casos de ese country especifico.
  handleCountryChange = async (country) => {
    // fetch the data
    const fetchedData = await fetchData(country);
    // set the data
    this.setState({ data: fetchedData, country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={ styles.container }>
        <img className={styles.image} src={covidImage} alt="Covid Logo" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App