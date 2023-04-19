import './App.css';
import React, { useState } from 'react';
import Tabs from './components/tabs';
import Results from './components/results';

function App() {

  const tabsArray = [
    { name: "Tab 1", content: "Tab 1  Yay, you created a tab." },
    { name: "Tab 2", content: "Tab 2  Yay, you created a tab." },
    { name: "Tab 3", content: "Tab 3  Yay, you created a tab." },
    { name: "Tab 4", content: "Tab 4  Yay, you created a tab." },
  ];


  const [ allTabs, setAllTabs ] = useState(tabsArray);

  const [ currentTabIndex, setCurrentTabIndex ] = useState(0);

  return (
    <div className="App">
      <Tabs 
        allTabs={ allTabs } 
        currentTabIndex={ currentTabIndex }
        setCurrentTabIndex={ setCurrentTabIndex } 
      />
      <Results allTabs={ allTabs } currentTabIndex={ currentTabIndex } />
    </div>
  );
}

export default App;