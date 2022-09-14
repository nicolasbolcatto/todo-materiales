// Imports css file for Item
import React from "react";
import './Item.css';

//Receives product data as props from ItemList
const Item = ({id,name,image,price,stock,category}) => {
    return(
        
        //Returns a card to show the information and image of the product
        <div key={id} className="item">
            <img className="itemImg" src={image} alt={name}></img>
            <p className="itemCategory">{category}</p>
            <p className="itemName">{name}</p>
            <p className="itemPriceList">$ {price}</p>
            <p className="itemStockList">Stock: {stock}</p>
        </div>
    )
    }
    
export default Item