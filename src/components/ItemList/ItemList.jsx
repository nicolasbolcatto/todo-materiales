// Imports cart icon and css file for ItemList
import React from "react";
import Item from '../Item/Item'
import './ItemList.css';

//The items array obtain with the promise in ItemListContainer is passed as a prop to ItemList
const ItemList = ({items}) => {
    return(
        //Maps the items array and passes its properties as props to Item
        <div className="itemList">
            {items.map(item => 
                
                <Item key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                stock={item.stock}/>
            )}
        </div>
    )
    }
    
export default ItemList