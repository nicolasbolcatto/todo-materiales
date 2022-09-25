import React, {useContext} from "react";
import './Cart.css';
import {CartContext} from "../../context/CartContext"
import { Link } from "react-router-dom";

const Cart = () => {

    const context = useContext(CartContext)

    return(
        <div className="cartContainer">
            {/* Conditional rendering of shopping list detail, or an empty cart message with a link to homepage */}
            {context.totalItemsInCart() ?
                <div>
                    <p className="cartTitle">Detalle de tu compra:</p>
                    {context.cart.map((item) => (
                        
                        <div className="cartItem" key={item.id}>
                            <img className="cartItemImage" src={"../.." + item.image} alt={item.name}></img>
                            <Link style={{textDecoration: 'none'}} to={`/item/${item.id}`}><p className="cartItemName">{item.name}</p></Link>
                            <div className="cartControls">
                                <button onClick={() => context.removeItem(item.id)} className="cartDeleteButton">x</button>
                                <p className="cartItemQuantity">{item.quantity} x $ {item.price} = $ {item.price*item.quantity}</p>
                            </div>
                            
                        </div>
                    ))
                    }
                    
                    <div key="totalPrice">
                        <p className="totalPriceText">Precio total: $ {context.totalPrice()}</p>
                    </div>

                    <div key="decision" className="cartButtonContainer">
                        <button onClick={context.clear} className="cartDeleteFullButton">Eliminar productos</button>
                        <button onClick={context.clear} className="carteEndShoppingButton">Finalizar la compra</button>
                    </div>
                </div>
            :
                <div className="noSelectionContainer">
                <p className="noSelectionText">No has seleccionado ningun producto!</p>
                <Link style={{textDecoration: 'none'}} to={"/"}>
                    <button className="exploreItemsButton">Explorar materiales</button>
                </Link>
                </div>
            }
            
        </div>
    )
}

export default Cart;