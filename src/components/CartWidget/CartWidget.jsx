// Imports cart icon and css file for CartWidget
import React from "react";
import cartIcon from "./cartIcon.png";
import './CartWidget.css';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
    const context = useContext(CartContext)
    return(
        
        //Returns the cart icon
        <div>
            <Link style={{textDecoration: 'none'}} to={"/cart"}>
                <div>
                    <img className="cartIcon" src={cartIcon} alt="cart icon" />
                    <div className="cartIconCount">{context.totalItemsInCart()}</div>
                </div>
               
            </Link>
        </div>
    )
    }
    
export default CartWidget