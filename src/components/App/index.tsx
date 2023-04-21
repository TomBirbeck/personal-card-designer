import { useEffect, useState } from 'react';
import BottomMenu from '../BottomMenu';
import CardContainer from '../CardContainer';
import Header from '../Header';
import LeftMenu from '../LeftMenu';
import RightMenu from '../RightMenu';
import TopMenu from '../TopMenu';
import './App.css';
import cardDesignContext from '../../context';
import pig from '../../assets/pig.png'

function App() {
  const [widowSize, setWindowSize] = useState<number>(window.innerWidth)
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
    imageUrl: pig
  })

  useEffect(()=>{
    const handleResizeWindow = () => setWindowSize(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  },[])

  return (
    <cardDesignContext.Provider value={cardProperties}>
    <div className="App">
     <Header/>
     <TopMenu/>
     <LeftMenu/>
     <CardContainer/>
     {widowSize >= 800 ?
     <RightMenu/> : null}
     <BottomMenu/>
    </div>
    </cardDesignContext.Provider>
  );
}

export default App;
