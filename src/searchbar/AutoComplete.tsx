import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { debounce } from '@mui/material/utils';
import CircularProgress from '@mui/material/CircularProgress';

const AutoComplete = ({ setResults }: any) => {
    const [input, setInput] = useState("");
    const [options, setOptions] = useState<Array<Object>>([]);
    const [disabled, setDisabled] = useState(false);
    const loading = !disabled && options.length === 0;
    const description = "test";
    const label = "label";

    function sleep(duration: number): Promise<void> {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, duration);
      });
    }
    
    React.useEffect(() => {
      let active = true;
  
      if (!loading) {
        return undefined;
      }
  
      (async () => {
        await sleep(1e3); // For demo purposes.
        if (active) {
          fetch("https://api.first.org/data/v1/countries")
            .then((response) => response.json())
            .then((json) => {
                const countrydata: Array<Object> = Object.values(json.data); 
                console.log(countrydata);
                setOptions(countrydata);
                console.log(options);
          });
        }
      })();
  
      return () => {
        active = false;
      };
    }, [loading]);

    const onChangeHandle = (value) => {
      // use the changed value to make request and then use the result. Which
      console.log(value);
      fetch("https://api.first.org/data/v1/countries")
        .then((response) => response.json())
        .then((json) => {
            const countrydata: Array<Object> = Object.values(json.data); 
            console.log(countrydata);
            setOptions(countrydata);
            console.log(options);
        });
    };

    return (
      <>
        <div className="">
          <div className="input-container bg-slate-300 pl-4 pr-6 py-2 shadow-lg flex flex-col justify-center items-center gap-5 rounded-md">  
            <div>{label}</div>
            <Autocomplete
              id="autocomplete-demo"
              options={options}
              disabled={disabled}
              loading = {loading}
              getOptionLabel={(options) => `${options.country}, ${options.region}`}
              isOptionEqualToValue={(option, value) => option.country === value.country}
              sx={{ width: 300 }}
              
              renderInput={(params) => 
                <TextField 
                  {...params} 
                  label="Type to begin searching"
                  onChange={e => {
                    if (e.target.value !== "" || e.target.value !== null) {
                      onChangeHandle(e.target.value);
                    }
                  }} 
                />
              }
            />
            <div>{description}</div>
          </div>
        </div>
        
      </>
    )    
  }

export default AutoComplete