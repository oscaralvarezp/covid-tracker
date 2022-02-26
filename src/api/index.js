import axios from "axios";

const ApiUrl = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = ApiUrl
  
  // Si existe el parametro country has la peticion a la api, de lo contrario has la peticion de los casos en general
  if(country) {
    changeableUrl = `${ApiUrl}/countries/${country}`
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(changeableUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (err) {
    console.error(err);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(
      "https://api.covidtracking.com/v1/us/daily.json"
    );

    return data.map(({ positive, recovered, death, dateChecked: date }) => ({
      confirmed: positive,
      recovered,
      deaths: death,
      date,
    }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${ApiUrl}/countries`)
    const countriesMap = countries.map((country) => country.name)
    return countriesMap 

  } catch (error) {
    console.error(error);
  }
}
