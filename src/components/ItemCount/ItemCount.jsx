//Imports css file for ItemCount
import {CartContext} from "../../context/CartContext";
import React,{useContext} from "react";
import './ItemCount.css';


function ItemCount ({item, initial, onAdd, count, setCount, itemAdd, setItemAdd}) {

    const context = useContext(CartContext)

    //Defines a function to reduce the quantity in the counter, and checks whether count is less or not than initial. If it is, it sets count to initial
    function onReduce(){
        if (count > 1){
            setCount(count-1)
        } else
            setCount(initial)
    }
    
    //Defines a function to increase the quantity in the counter, and checks whether count is less than stock. If it is not, it sets count to stock
    function onIncrease(){
        if (count < item.stock){
            setCount(count+1)
        } else
            setCount(item.stock)
    }


    //Defines a function to completely remove an item from the cart. It also updates the selected amount and the stock.
    function onRemove(){
        context.removeItem(item.id)
        setItemAdd(0);
        item.stock += itemAdd;
    }
    
    return(
        //Renders the counter and "add"/"reduce" buttons, along with the stock of the item
        <div>
            <div className="itemCount">
                <button className="itemCountButton" onClick = {onReduce}>-</button>
                <p className="itemCountInput">{count}</p>
                <button className="itemCountButton" onClick={onIncrease}>+</button>
                <button className="itemAddButton" onClick = {onAdd}>Agregar</button>
                <div className="itemStock">
                    <p>Stock: {item.stock}</p>
                </div>
            </div>
        </div>
    )
}
    
export default ItemCount