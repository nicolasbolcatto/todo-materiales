//imports  NavBar and ItemListContainer components, and css file for App
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import Cart from './components/Cart/Cart';
import Error404 from './components/Error404/Error404';
import CartProvider from './context/CartContext';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  //Renders NavBar and App components
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar  />
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
