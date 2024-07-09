import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { debounce } from '@mui/material/utils';

const AutoComplete = ({ description, label, loading, multiple }: any) => {
    const [options, setOptions] = useState<Array<Object>>([]);
    const [disabled, setDisabled] = useState(false);
    
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
            <div className='text-blue-500'>{label}</div>
            <Autocomplete
              freeSolo
              noOptionsText={"No matches..."}
              multiple={multiple}
              id="autocomplete-demo"
              options={options}
              disabled={disabled}
              loading = {loading}
              filterOptions={(options) => options}
              getOptionLabel={(options) => (options as { country: string }).country + ", " + (options as { region: string }).region}
              isOptionEqualToValue={(option, value) => (option as { country: string }).country === (value as {country: string}).country}
              sx={{ width: 300 }}
              renderInput={(params) => 
                <TextField 
                  {...params} 
                  label="Type to begin searching"
                  onChange={(e) => {
                    if (loading === true) {
                      delayedCall(e.target.value);
                    }
                    else if(loading === false){
                      onInputChange(e.target.value);
                    }
                  }} 
                />
              }
            />
            <div className='text-blue-500'>{description}</div>
          </div>
        </div>
        
      </>
    )    
  }

export default AutoComplete