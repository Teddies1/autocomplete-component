import * as React from 'react';

type AutoCompleteProps = {
    // description: string,

}

const AutoComplete = (props: AutoCompleteProps) => {
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="">
          <input placeholder='Type to begin searching' className='px-6 py-2 w-full border border-slate-500'></input>
        </div>
      </div>
    </>
  )    
}

export default AutoComplete