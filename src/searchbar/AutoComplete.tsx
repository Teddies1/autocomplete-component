import { useState } from 'react';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { debounce } from '@mui/material/utils';
import CircularProgress from '@mui/material/CircularProgress';

const AutoComplete = ({ description, label, loading }) => {
    const [options, setOptions] = useState<Array<Object>>([]);
    const [disabled, setDisabled] = useState(false);
    
    
    function sleep(duration: number = 0): Promise<void> {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, duration);
      });
    }
    
    const onInputChange = (value: string) => {
      fetch("https://api.first.org/data/v1/countries")
        .then((response) => response.json())
        .then((json) => {
            const countrydata: Array<Object> = Object.values(json.data);
            const filtered: any = countrydata.filter((countries) => {
              return countries && 
              (countries as any).country && 
              (countries as any).country.toLowerCase().includes(value)
            })
            setOptions(filtered);
        });
    };
    
    const delayedCall = debounce(onInputChange, 1000);

    return (
      <>
        <div className="">
          <div className="input-container bg-slate-300 pl-4 pr-6 py-2 shadow-lg flex flex-col justify-center items-center gap-5 rounded-md">  
            <div>{label}</div>
            <Autocomplete
              multiple
              id="autocomplete-demo"
              options={options}
              disabled={disabled}
              loading = {loading}
              filterOptions={(options) => options}
              getOptionLabel={(options) => `${options.country}, ${options.region}`}
              isOptionEqualToValue={(option, value) => option.country === value.country}
              sx={{ width: 300 }}
              renderInput={(params) => 
                <TextField 
                  {...params} 
                  label="Type to begin searching"
                  onChange={(e) => {
                    console.log(loading);
                    if (loading === true && (e.target.value !== "" || e.target.value !== null)) {
                      console.log("async");
                      delayedCall(e.target.value);
                    }
                    else if(loading === false && (e.target.value !== "" || e.target.value !== null)){
                      console.log("sync");
                      onInputChange(e.target.value);
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