//imports  NavBar and ItemListContainer components, and css file for App
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  //Renders NavBar and ItemListContainer components
  return (
    <div className="App">
      <NavBar  />
      <ItemListContainer/>
      <ItemCount itemName={"Item Nºxx"} stock={5} initial={1}/>
    </div>
  );
}

export default App;
