import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { debounce } from '@mui/material/utils';

type AutoCompleteProps = {
    // description: string,

}

const AutoComplete = ({ setResults }: any) => {
    const [input, setInput] = useState("");
    const [options, setOptions] = useState<Array<Object>>([]);

    // const fetchData = (value: string) => {
    //   fetch("https://api.first.org/data/v1/countries")
    //       .then((response) => response.json())
    //       .then((json) => {
    //           const countrydata: Array<Object> = Object.values(json.data); 
    //           const options = countrydata.filter((countries) => {
    //               return (
    //                   value && 
    //                   countries && 
    //                   (countries as any).country && 
    //                   (countries as any).country.toLowerCase().includes(value)
    //               );
    //           });
    //           console.log(options);
    //       });
    // };
    React.useEffect(() => {
      fetch("https://api.first.org/data/v1/countries")
          .then((response) => response.json())
          .then((json) => {
              const countrydata: Array<Object> = Object.values(json.data); 
              console.log(countrydata);
              setOptions(countrydata);
              console.log(options);
          });
    }, []);

    const onInputChange = (value: string) => {
        setInput(value);
        fetchData(value);
    };
    // const options = ["jenny"]
    return (
      <>
        <div className="">
          <div className="input-container bg-slate-300 pl-4 pr-6 py-2 shadow-lg flex flex-col justify-center items-center gap-5 rounded-md">  
            {/* <FaSearch/>    
            <input 
                placeholder='Type to begin searching' className='pl-2 pr-6 py-2 w-full h-full border border-slate-500 bg-transparent border-none focus:outline-none' 
                value={input}
                onChange={(e) => onInputChange(e.target.value)}
            >
            </input> */}
            <Autocomplete
              multiple
              disablePortal
              id="combo-box-demo"
              options={options}
              filterOptions={(x) => x}
              sx={{ width: 300 }}
              renderInput={(params) => 
                <TextField 
                  {...params} 
                  label="Type to begin searching" 
                  onChange={(e) => onInputChange(e.target.value)}
                />
              }
            />
          </div>
        </div>
        
      </>
    )    
  }

export default AutoComplete