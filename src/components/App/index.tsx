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
    height: 150,
    width: 300,
    font: 'sans-serif',
    fontSize: 16,
    textAlign: 'left' ,
    border: false,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 0,
    borderColor: 'red',
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
