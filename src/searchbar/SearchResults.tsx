import {
    useFloating,
    autoUpdate,
    offset,
    flip,
    shift,
    FloatingPortal,
  } from '@floating-ui/react';
import React from 'react'

const SearchResults = ({ results }) => {
  return (
    <>
        {/* <div className='options-list w-2/4 bg-slate-300 flex flex-col rounded-md shadow-lg mt-1 max-h-40 overflow-y-scroll'>
           {results.map((result, id) => {
                return <div className="px-5 py-4 hover:bg-blue-200" key={id}>{result.country}</div>
            })};
        </div> */}
    </>
  );
}

export default SearchResults