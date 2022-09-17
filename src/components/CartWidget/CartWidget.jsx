// Imports cart icon and css file for CartWidget
import React from "react";
import cartIcon from "./cartIcon.png";
import './CartWidget.css';
import { Link } from "react-router-dom";

const CartWidget = () => {
    return(
        //Returns the cart icon
        <div>
            <Link to={"/cart"}>
                <img className="cartIcon" src={cartIcon} alt="cart icon" />
            </Link>
        </div>
    )
    }
    
export default CartWidget