// Imports cart icon and css file for ItemList
import React from "react";
import Item from '../Item/Item'
import './ItemList.css';
import {Link} from "react-router-dom"

//The items array obtain with the promise in ItemListContainer is passed as a prop to ItemList
const ItemList = ({items}) => {
    return(
        //Maps the items array and passes its properties as props to Item
        <div className="itemList">
            {items.map(item => 
                
                <Link className="linkItem" key={item.id} style={{textDecoration: 'none'}} to={`/item/${item.id}`}>
                    <Item 
                    item={item}/>
                </Link>
                
            )}
        </div>
    )
    }
    
export default ItemList