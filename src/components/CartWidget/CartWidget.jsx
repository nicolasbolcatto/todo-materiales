// Imports cart icon and css file for CartWidget
import React from "react";
import cartIcon from "./cartIcon.png";
import './CartWidget.css';

const CartWidget = () => {
    return(
        //Returns the cart icon
        <div>
            <img className="cartIcon" src={cartIcon} alt="cart icon" />
        </div>
    )
    }
    
export default CartWidget