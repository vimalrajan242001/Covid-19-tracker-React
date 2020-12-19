import React,{useState,useEffect} from 'react'
import {FormControl,MenuItem,Select,InputLabel} from '@material-ui/core'
import style from './CountryPicker.module.css'
// import style from './CountryPicker.module.css'
import {fetchCountries} from '../../api'
function CountryPicker({ handleCountryChange }) {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchedAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchedAPI();
  }, [setFetchedCountries]);
//   console.log(fetchedCountries);
  return (
    <div>
      <FormControl>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Country
        </InputLabel>
        <Select
          defaultValue=""
          onChange={(e)=> handleCountryChange(e.target.value)}
          className={style.input}
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          displayEmpty
        >
          <MenuItem value="">Global</MenuItem>
          {fetchedCountries.map((country, i) => (
            <MenuItem key={i} value={country}>{country}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default CountryPicker
