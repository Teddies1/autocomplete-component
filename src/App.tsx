import './App.css'
import AutoComplete from './searchbar/AutoComplete';

function App() {
  return (
    <>
      <div className='search-container bg-white w-2/4 m-auto h-[100vh] gap-2 flex flex-col justify-center items-center'>
        <AutoComplete  
          description="With default display and search on focus" 
          label="Sync Search" 
          loading={false} 
          multiple={true}
        />
        <AutoComplete  
          description="With description and custom results display" 
          label="Async Search" 
          loading={true} 
          multiple={false}
        />
        <AutoComplete  
          description="With description and custom results display" 
          label="Async Search with Multi-select" 
          loading={true} 
          multiple={true}
        />
      </div>
    </>
  )
}

export default App
