// Imports css file for Item
import React from "react";
import './Item.css';

//Receives product data as props from ItemList
const Item = ({id,name,image,price,stock}) => {
    return(
        
        //Returns a card to show the information and image of the product
        <div className="item">
            <div key={id} className="item">
                <img className="itemImg" src={image} alt={name}></img>
                <p className="itemName">{name}</p>
                <p>$ {price}</p>
                <p>Stock: {stock}</p>
                <button className="itemButton">Detalles</button>
            </div>
        </div>
    )
    }
    
export default Item