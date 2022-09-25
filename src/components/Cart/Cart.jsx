import React, {useContext} from "react";
//import './Cart.css';
import {CartContext} from "../../context/CartContext"


const Cart = () => {

    const context = useContext(CartContext)
    const cart = context.cart
    
    return(
        <div className="cartContainer">
            {cart===[] ? "Carrito vacio" : "Elementos del carrito"}
        </div>
    )
}

export default Cart;