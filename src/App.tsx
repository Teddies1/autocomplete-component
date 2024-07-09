import './App.css'
import { useState } from 'react';
import AutoComplete from './searchbar/AutoComplete';
import SearchResults from './searchbar/SearchResults';

function App() {
  const [results, setResults] = useState([]);
  return (
    <>
      <div className='bg-white w-2/4 m-auto h-[100vh] gap-2 search-container flex flex-col justify-center items-center'>
        <AutoComplete  description="With default display and search on focus" label="Sync Search" loading={false} />
        <AutoComplete  description="With description and custom results display" label="Async Search" loading={true} />
      </div>
    </>
  )
}

export default App
