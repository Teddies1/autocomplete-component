import './App.css'
import { useState } from 'react';
import AutoComplete from './searchbar/AutoComplete';
import SearchResults from './searchbar/SearchResults';

function App() {
  const [results, setResults] = useState([]);
  return (
    <>
      <div className='bg-white w-2/4 m-auto h-[100vh] search-container flex flex-col justify-center items-center'>
        <AutoComplete setResults={setResults} />
      </div>
    </>
  )
}

export default App
