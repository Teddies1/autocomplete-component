import * as React from 'react';
import { FaSearch } from 'react-icons/fa';

type AutoCompleteProps = {
    // description: string,

}

const AutoComplete = (props: AutoCompleteProps) => {
  
  return (
    <>
      
      <div className="w-full h-[100vh] flex gap-10 flex-col justify-center items-center">
        <div className="input-container bg-slate-300 pl-4 pr-6 py-2 shadow-lg flex justify-center items-center gap-5 rounded-md">  
          <FaSearch/>    
          <input placeholder='Type to begin searching' className='pl-2 pr-6 py-2 w-full border border-slate-500 bg-transparent border-none focus:outline-none'></input>
        </div>
      </div>
      
    </>
  )    
}

export default AutoComplete