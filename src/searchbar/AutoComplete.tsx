import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

type AutoCompleteProps = {
    // description: string,

}

const AutoComplete = ({ setResults }: any) => {
    const [input, setInput] = useState("");

    const fetchData = (value: string) => {
      fetch("https://api.first.org/data/v1/countries")
          .then((response) => response.json())
          .then((json) => {
              const countrydata: Array<Object> = Object.values(json.data);
              const options = countrydata.filter((countries) => {
                  return (
                      value && 
                      countries && 
                      (countries as any).country && 
                      (countries as any).country.toLowerCase().includes(value)
                  );
              });
              setResults(options);
          });
    };

    const onInputChange = (value: string) => {
        setInput(value);
        fetchData(value);
    };

    return (
      <>
        <div className="">
          <div className="input-container bg-slate-300 pl-4 pr-6 py-2 shadow-lg flex justify-center items-center gap-5 rounded-md">  
            <FaSearch/>    
            <input 
                placeholder='Type to begin searching' className='pl-2 pr-6 py-2 w-full border border-slate-500 bg-transparent border-none focus:outline-none' 
                value={input}
                onChange={(e) => onInputChange(e.target.value)}
            >
            </input>
          </div>
        </div>
      </>
    )    
  }

export default AutoComplete