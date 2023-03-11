import BottomMenu from '../BottomMenu';
import CardContainer from '../CardContainer';
import Header from '../Header';
import LeftMenu from '../LeftMenu';
import RightMenu from '../RightMenu';
import TopMenu from '../TopMenu';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <TopMenu/>
     <LeftMenu/>
     <CardContainer/>
     <RightMenu/>
     <BottomMenu/>
    </div>
  );
}

export default App;
