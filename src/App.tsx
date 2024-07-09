import './App.css'
import { useState } from 'react';
import AutoComplete from './searchbar/AutoComplete';
import SearchResults from './searchbar/SearchResults';

function App() {
  const [results, setResults] = useState([]);
  return (
    <>
      <div className='w-full h-[100vh] search-container flex flex-col justify-center items-center'>
        <AutoComplete setResults={setResults} />
        <SearchResults results={results} />
      </div>
    </>
  )
}

export default App
