// Imports css file for Item
import React from "react";
import './Item.css';

//Receives product data as props from ItemList
const Item = ({item}) => {
    return(
        
        //Returns a card to show the information and image of the product
        <div className="item">
            <img className="itemImgList" src={item.image} alt={item.name}></img>
            <p className="itemNameList">{item.name}</p>
            <p className="itemCategoryList">{item.category}</p>
            <p className="itemPriceList">$ {item.price}</p>
            <p className="itemStockList">Stock: {item.stock}</p>
        </div>
    )
    }
    
export default Item