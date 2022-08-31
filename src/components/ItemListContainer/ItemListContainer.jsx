//Imports ItemCount component and css file for ItemListContainer
import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemListContainer.css';

const ItemListContainer = (props) => {
    return(
        //Returns the item list, for now it is just an example
        //Returns the ItemCount component
        <div className="itemList">
            <div className="item">
                <p>{props.greeting}</p>
            </div>
            <div className="item">
                <p>Albañilería</p>
            </div>
            <div className="item">
                <p>Pisos y revestimientos</p>
            </div>
            <div className="item">
                <p>Aceros y chapas</p>
            </div>
            <div className="item">
                <p>Maderas</p>
            </div>
            <div className="item">
                <p>Pinturas y selladores</p>
            </div>
            <div className="item">
                <ItemCount itemName={"Item Nºxx"} stock={5} initial={1}/>
            </div>
        </div>
    )
    }
    
export default ItemListContainer