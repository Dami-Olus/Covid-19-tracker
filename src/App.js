
import './App.css';
import { MenuItem, FormControl, Select } from "@material-ui/core";

function App() {
  return (
    <div className="app">
      <h1>Covid 19 Tracker</h1>
      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value="abc"
        >
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>

        </Select>
      </FormControl>

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
