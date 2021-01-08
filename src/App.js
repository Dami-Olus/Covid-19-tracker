import { useState, useEffect } from "react";
import InfoBox from './InfoBox';
import './App.css';
import { MenuItem, FormControl, Select, Card, CardContent } from "@material-ui/core";
import Map from "./Map";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});



    useEffect(() => {

      const getCountriesData = async () => {
        await fetch("https://disease.sh/v3/covid-19/countries").then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country,
              value: country.countryInfo.iso2
            }
          ));
          setCountries(countries);
        });
      };
      getCountriesData();
    }, []);

    const onCountryChange = async (event) => {
      const countryCode = event.target.value;
      setCountry(countryCode);

      const url = countryCode === "worldwide" ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

      await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode);
        setCountryInfo(data);
      });
    };

    console.log("COUNTRY INFO >>>", countryInfo);

  return (
    <div className="app">
      <div className="app__left">
          <div className="app__header">
              <h1>Covid 19 Tracker</h1>
              <FormControl className="app__dropdown">
                <Select
                  variant="outlined"
                  onChange={onCountryChange}
                  value={country}
                >
                  <MenuItem value="worldwide">Worldwide</MenuItem>
                      {
                        countries.map((country) => (
                          <MenuItem value={country.value}>{country.name}</MenuItem>
                        ))
                        }

                </Select>
              </FormControl>
            </div>
            
            <div className="app__stats">
              <InfoBox title="CoronaVirus cases" cases={12345} total={2000}/>

              <InfoBox title="Recoveres" cases={123} total={3000} />

              <InfoBox title="Deaths" cases={1234} total={4000} />
            </div>
            
            <Map />

      </div>

<Card className="app__right">

  <CardContent>
    <h3>Live Cases by Country</h3>
    {/*Table*/}
    <h3>Worldwide New Cases</h3>
        {/*Graph*/}
  </CardContent>
</Card>
    </div>
  );
}

export default App;
