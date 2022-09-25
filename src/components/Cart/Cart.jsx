import React, {useContext} from "react";
import './Cart.css';
import {CartContext} from "../../context/CartContext"
import { Link } from "react-router-dom";

const Cart = () => {

    const context = useContext(CartContext)

    //console.log(context.cart)
    return(
        <div className="cartContainer">
            {context.cart === [] ?
            <div>
                {console.log("Aqui")}
                <p>No has seleccionado ningun producto</p>
                <Link style={{textDecoration: 'none'}} to={"/"}>
                    <button>Explorar materiales</button>
                </Link>
            </div>
            :
            <div>
                <p className="cartTitle">Detalle de tu compra:</p>
                {context.cart.map((item) => (
                    
                    <div className="cartItem" key={item.id}>
                        <img className="cartItemImage" src={"../.." + item.image} alt={item.name}></img>
                        <p className="cartItemName">{item.name}</p>
                        <div className="cartControls">
                            <button onClick={() => context.removeItem(item.id)} className="cartDeleteButton">x</button>
                            <p className="cartItemQuantity">{item.quantity} x $ {item.price} = $ {item.price*item.quantity}</p>
                        </div>
                    </div>
                ))
                }
            </div> 
            }
            {context.cart === [] ?
                <div>
                    <p>No has seleccionado ningun producto</p>
                    <Link to={"/"}>
                        <button>Explorar materiales</button>
                    </Link>
                </div>
                    :
                <div>
                    <button onClick={context.clear} className="cartDeleteFullButton">Eliminar el carrito</button>
                </div>
                    
                }
                        
        
            

            
            
        </div>
    )
}

export default Cart;