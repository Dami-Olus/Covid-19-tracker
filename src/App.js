import { useState } from "react";
import './App.css';
import { MenuItem, FormControl, Select } from "@material-ui/core";

function App() {
  const [countries, setCountries] = useState(["USA", "UK", "INDIA"]);

  return (
    <div className="app">
      <div className="app__header">
      <h1>Covid 19 Tracker</h1>
      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value="abc"
        >
              {
                countries.map((country) => (
                  <MenuItem value={country}>{country}</MenuItem>
                ))
              }

          {/*<MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Option1</MenuItem>
          <MenuItem value="worldwide">Option2</MenuItem>
  <MenuItem value="worldwide">Greatstuff</MenuItem>*/}

        </Select>
      </FormControl>
      </div>
      

        {/*Header*/}
        {/*Title + Select inout dropdown field*/}

        {/*Info box*/}
        {/*Info box*/}
        {/*Info box*/}

        {/*Table*/}
        {/*Graph*/}

        {/*Map*/}


    </div>
  );
}

export default App;
