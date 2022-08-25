import './App.css';
import NavBar from './components/NavBar';
import Content from './components/Content';
import './styles/NavBar.css';
function App() {
  return (
    <div className="App">
      <NavBar  />
      <Content variableDePrueba="Segundo Desafío entregado!!" />
    </div>
  );
}

export default App;
