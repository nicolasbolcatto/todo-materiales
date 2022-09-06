//Imports css file for ItemCount
import React from "react";
import './ItemCount.css';

function ItemCount ({itemName,stock,initial}) {
    //Defines Hook for state "count"
    const [count,setCount]= React.useState(1);

    //Defines a function to reduce the quantity in the counter, and checks wether count is less or not than initial. If it is, it sets count to initial
    function onReduce(){
        if (count > 1){
            setCount(count-1)
        } else
            setCount(initial)
    }
    
    //Defines a function to increase the quantity in the counter, and checks whether count is less than stock. If it is not, it sets count to stock
    function onIncrease(){
        if (count < stock){
            setCount(count+1)
        } else
            setCount(stock)
    }

    function onAdd(){
        console.log(`Se agregaran ${count} items al carrito`)
        }
    

    return(
        //Renders the counter and "add"/"reduce" buttons, along with the stock of the item
        <div>
            <div>
                <p>{itemName}</p>
                <p>Stock: {stock}</p>
                <button className="itemCountButton" onClick = {onReduce}>-</button><span className="itemCountInput">{count}</span><button className="itemCountButton" onClick={onIncrease}>+</button>
            </div>
            <button className="itemAddButton" onClick = {onAdd}>Agregar al carrito</button>
        </div>
    )
}
    
export default ItemCount