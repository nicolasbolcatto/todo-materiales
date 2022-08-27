import './App.css';
import NavBar from './components/NavBar';
import './components/NavBar.css';
import './components/CartWidget.css';
import './components/ItemListContainer.css';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar  />
      <ItemListContainer/>
    </div>
  );
}

export default App;
