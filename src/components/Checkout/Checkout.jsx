import {React, useState, useContext} from 'react'
import {CartContext} from "../../context/CartContext"
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Success from "../Success/Success"
import './Checkout.css';

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
              items.push({id: item.id, name: item.name, price: item.price, quantity: item.quantity})
            });
            //Gets the date of the purchase
            const date = new Date();
            const now = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            //Creates the order
            const order = {customer:customer, items:items, date:now, total: context.totalPrice()};

             //Creates Firestore connection to load the order to the database
             const db = getFirestore();
             const orderCollection =  collection(db, "orders");
             addDoc(orderCollection, order).then(({id}) => {
                 setOrderId(id);
                 context.clear();
             });
        }
    }

  return (
    <div>
      {context.totalItemsInCart() ?
      <div className="checkoutContainer">
        <div className='formGroup'>
            <label htmlFor="name" className='formLabel'>Nombre</label>
            <input type="text"  id="name" onInput={(e) => setName(e.target.value)} />
        </div>
        <div className='formGroup'>
            <label htmlFor="email" className='formLabel'>Email</label>
            <input type="text" id="email" className="formInput" onInput={(e) => setEmail(e.target.value)} />
        </div>
        <div className='formGroup'>
            <label htmlFor="phone" className='formLabel'>Teléfono</label>
            <input type="text" id="phone" className="formInput"  onInput={(e) => setPhone(e.target.value)} />
        </div>
        <button type="button" className='orderButton' onClick={() => {sendOrder()}}>Generar Orden</button>
      </div>
      :
      orderId !== "" ? <Success id={orderId} /> : <div role="alert">No se encontraron Productos!</div>}
    </div>
  )
}

export default Checkout