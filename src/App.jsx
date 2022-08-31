//imports  NavBar and ItemListContainer components, and css file for App
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  //Renders NavBar and ItemListContainer components
  return (
    <div className="App">
      <NavBar  />
      <ItemListContainer greeting="Prop de prueba"/>
    </div>
  );
}

export default App;
