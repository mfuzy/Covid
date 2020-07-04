import React from "react";
import styles from "./Svet.module.css";
import Card from "../Card/Card";
import LineChartGlobal from "./Charts/LineChartGlobal";
import BarChartCountry from "./Charts/BarChartCountry";
import CountryPicker from "./CountryPicker/CountryPicker";
import axios from "axios";

class Svet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      globalData: null,
      dailyData: [],
      countries: [],
      selectedCountry: "Slovakia",
      countryData: null
    };
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    const url = "https://covid19.mathdro.id/api";

    const requestGlobal = axios.get(url);
    const requestDaily = axios.get(url + "/daily");
    const requestCountries = axios.get(url + "/countries");
    const requestCountry = axios.get(
      url + "/countries/" + this.state.selectedCountry
    );

    axios
      .all([requestGlobal, requestDaily, requestCountries, requestCountry])
      .then(
        axios.spread((...results) => {
          const fetchedGlobalData = {
            pozitivni: results[0].data.confirmed.value,
            vylieceni: results[0].data.recovered.value,
            umrtia: results[0].data.deaths.value,
            datum: new Date(results[0].data.lastUpdate).toLocaleDateString()
          };

          const fetchedDailyData = results[1].data.map((i, k) => {
            return {
              pozitivni: i.totalConfirmed,
              umrtia: i.deaths.total,
              datum: new Date(i.reportDate).toLocaleDateString()
            };
          });

          const fetchedCountries = results[2].data.countries.map(
            (i, k) => i.name
          );

          const fetchedCountryData = {
            pozitivni: results[3].data.confirmed.value,
            vylieceni: results[3].data.recovered.value,
            umrtia: results[3].data.deaths.value,
            datum: results[3].data.lastUpdate
          };

          this.setState({
            globalData: fetchedGlobalData,
            dailyData: fetchedDailyData,
            countries: fetchedCountries,
            countryData: fetchedCountryData
          });
        })
      )
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedCountry === this.state.selectedCountry) {
      return;
    }

    const url = "https://covid19.mathdro.id/api/countries/";
    axios
      .get(url + this.state.selectedCountry)
      .then(res => {
        const fetchedCountryData = {
          pozitivni: res.data.confirmed.value,
          vylieceni: res.data.recovered.value,
          umrtia: res.data.deaths.value,
          datum: res.data.lastUpdate
        };
        this.setState({ countryData: fetchedCountryData });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onSelect(e) {
    const country = e.target.value;

    this.setState({ selectedCountry: country });
  }

  render() {
    return (
      <div>
        <h1>Svet</h1>

        {this.state.globalData ? (
          <div>
            <div className={styles.container}>
              <Card
                trieda="red"
                nazov="Celkový počet pozitívnych globálne"
                hodnota={this.state.globalData.pozitivni}
                datum={this.state.globalData.datum}
              />

              <Card
                trieda="green"
                nazov="Celkový počet vyliečených globálne"
                hodnota={this.state.globalData.vylieceni}
                datum={this.state.globalData.datum}
              />

              <Card
                trieda="black"
                nazov="Celkový počet úmrtí globálne"
                hodnota={this.state.globalData.umrtia}
                datum={this.state.globalData.datum}
              />
            </div>
            <br />
            <hr />

            <div>
              <h2 style={{ textAlign: "center" }}>Grafy </h2>

              <LineChartGlobal data={this.state.dailyData} />
              <hr />
              <br />
              <h3>jednotlivé krajiny (pozitívni, vyliečení a úmrtia):</h3>
              <CountryPicker
                countries={this.state.countries}
                selectedCountry={this.state.selectedCountry}
                onSelect={this.onSelect}
              />
              <BarChartCountry
                data={this.state.countryData}
                country={this.state.selectedCountry}
              />
            </div>
          </div>
        ) : (
          <p>LOADING...</p>
        )}
      </div>
    );
  }
}

export default Svet;
