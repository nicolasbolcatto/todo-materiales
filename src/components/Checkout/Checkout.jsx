import {React, useState, useContext} from 'react'
import {CartContext} from "../../context/CartContext"
import {doc, getDoc, getFirestore, collection, addDoc, updateDoc } from "firebase/firestore";
import Success from "../Success/Success"
import './Checkout.css';
import { Link } from "react-router-dom";

const Checkout = () => {

    const context = useContext(CartContext)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [orderId, setOrderId] = useState("");

    const sendOrder = () => {
        if ((name !== "") && (email !== "") && (phone !== "")){
            //Creo el objeto con los Datos del Comprador
            const customer = {name:name, email:email, phone:phone};
            //Creates array of selected items in cart
            const items = []
            context.cart.forEach(item => {

              //Push item ini cart to the items array
              items.push({id: item.id, name: item.name, price: item.price, quantity: item.quantity})
              
              //Update stocks in database
              const db = getFirestore();
              
              const currentDoc = doc(db, "items", item.id);
              
              getDoc(currentDoc).then((snapshot) =>{
                if (snapshot.exists()){
                  const newStock = snapshot.data().stock - item.quantity
                  console.log(newStock)
                  updateDoc(currentDoc, {stock: newStock})
                   
              }
              
              }).catch(error => console.log("Hubo un error en la carga de datos: " + error))
            })

            //Get the date of the purchase
            const date = new Date();
            const now = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            
            //Create the order
            const order = {customer:customer, items:items, date:now, total: context.totalPrice()};

            //Create Firestore connection to load the order to the database
            const db = getFirestore();
            const orderCollection =  collection(db, "orders");
            addDoc(orderCollection, order).then(({id}) => {
                setOrderId(id);
                //Clear the cart
                context.clear();
            });
        }
    }

  return (
    <div>
      {context.totalItemsInCart() ?
      <div className="checkoutContainer">
        <div className='formGroup'>
          <div>
            <label htmlFor="name" className='formLabel'>Nombre</label>
          </div>
          <div>
          <input type="text"  className="formInput" id="name" onInput={(e) => setName(e.target.value)} />
          </div> 
        </div>
        <div className='formGroup'>
          <div>
            <label htmlFor="email" className='formLabel'>Email</label>
          </div>
          <div>
            <input type="text" id="email" className="formInput" onInput={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className='formGroup'>
          <div>
            <label htmlFor="phone" className='formLabel'>Teléfono</label>
          </div>
          <div>
            <input type="text" id="phone" className="formInput"  onInput={(e) => setPhone(e.target.value)} />
          </div>
            
        </div>
        <button type="button" className='orderButton' onClick={() => {sendOrder()}}>Generar Orden</button>
      </div>
      :
      orderId !== "" ? <Success id={orderId} />
      : 
      <div className="noSelectionContainer">
      <p className="noSelectionText">No has seleccionado ningun producto!</p>
      <Link style={{textDecoration: 'none'}} to={"/"}>
          <button className="exploreItemsButton">Explorar materiales</button>
      </Link>
      </div>}
    </div>
  )
}

export default Checkout