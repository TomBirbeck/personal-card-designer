import { useState } from 'react';
import BottomMenu from '../BottomMenu';
import CardContainer from '../CardContainer';
import Header from '../Header';
import LeftMenu from '../LeftMenu';
import RightMenu from '../RightMenu';
import TopMenu from '../TopMenu';
import './App.css';
import cardDesignContext from '../../context';
import fox from '../../assets/fox.jpg'

function App() {
  const cardProperties = useState({
    layout : 1,
    height: 150,
    width: 300,
    font: 'sans-serif',
    fontColor: 'black',
    fontSize: 16,
    fontWeight: 400,
    textAlign: 'left' ,
    border: false,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 0,
    borderColor: 'black',
    backgroundStyle: 'solid',
    backgroundColorOne: '#FFFFFF',
    backgroundColorTwo: '',
    imageUrl: fox
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
