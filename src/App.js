import jobs from './data.json';
import Jobs from './components/Jobs';
import Header from './components/Header';
import { useState } from 'react';
import bgImage from './components/images/bg-header-desktop.svg';

function App() {
  const [filteredKeywords, setFilteredKeywords] = useState([]);

  const addFilteredKeywords = (data) => {
      // check if the data to enter exists in the filteredKeywords
      if(!filteredKeywords.includes(data)) {
        // call setFilteredKeywords and pass in the data
        setFilteredKeywords([...filteredKeywords, data]);
      }
  };

  const deleteKeyword = (data) => {
    const newKeywords = filteredKeywords.filter(keyword => keyword !== data);

    setFilteredKeywords(newKeywords);
  };

  const clear = () => {
    setFilteredKeywords([]);
  }

  return (
    <div className="bg-LightGrayishCyan">
      <div className='bg-DesaturatedDarkCyan'>
        <img src={bgImage} alt='logo' className='w-full' />
        {filteredKeywords.length > 0 && <Header keywords = {filteredKeywords} deleteKeyword={deleteKeyword} 
        clear={clear} />}
      </div>
    

       <Jobs jobs={jobs} setKeyWords={addFilteredKeywords} keywords={filteredKeywords} />
    </div>
  );
}

export default App;
