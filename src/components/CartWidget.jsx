import React from "react";
import cartIcon from '../images/cartIcon.png';

const CartWidget = () => {
    return(
        <div>
            <img className="cartIcon" src={cartIcon} alt="cart icon" />
        </div>
    )
    }
    
export default CartWidget