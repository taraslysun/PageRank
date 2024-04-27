import React, { useState } from 'react';
import SearchLine from './components/SearchLine';
import SearchResults from './components/SerchResults';
import inputList from './data/types.json';

function App() {
  const [selectedValue, setSelectedValue] = useState([]);

  return(
    <div>
      <SearchLine options={inputList} selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
      <SearchResults selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
    </div>
  )
}
// document.getElementById('results').innerHTML = SearchResults(fakeRankedWebsites);
// SearchResults(fakeRankedWebsites);

export default App;
