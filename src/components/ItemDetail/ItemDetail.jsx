import React from "react";
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css';

const ItemDetail = ({item}) => {
    return(
        //Returns the item detail
        <div>

            <div className="itemDetail" key={item.id}>
                <div>
                    <img className="itemImage" src={item.image} alt={item.name}></img>
                </div>
                <div>
                    <p className="itemName">{item.name}</p>
                    <p className="itemCategory">{item.category}</p>
                    <p className="itemPrice">$ {item.price}</p>
                    <p className="itemDescription">{item.description}</p>
                </div>
                <div>
                {/* Quise pasar el item.stock de forma dinámica pero no logro hacer que funcione, el state aparece como undefined */}
                <ItemCount stock={20} initial={1} onAdd={0}/>
                </div>
            </div>
            
            
        </div>
    )
    }
    
export default ItemDetail