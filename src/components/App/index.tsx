import { useState } from 'react';
import BottomMenu from '../BottomMenu';
import CardContainer from '../CardContainer';
import Header from '../Header';
import LeftMenu from '../LeftMenu';
import RightMenu from '../RightMenu';
import TopMenu from '../TopMenu';
import './App.css';
import cardDesignContext from '../../context';

function App() {
  const cardProperties = useState({
    layout : 1,
    height: 300,
    width: 150,
    font: 'sans-serif',
    fontSize: 16,
    textAlign: 'left' 
  })
  return (
    <cardDesignContext.Provider value={cardProperties}>
    <div className="App">
     <Header/>
     <TopMenu/>
     <LeftMenu/>
     <CardContainer/>
     <RightMenu/>
     <BottomMenu/>
    </div>
    </cardDesignContext.Provider>
  );
}

export default App;
