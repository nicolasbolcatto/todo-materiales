//Imports css file for ItemCount
import React from "react";
import './ItemCount.css';

function ItemCount ({item,initial,onAdd}) {
    //Defines Hook for state "count"
    const [count,setCount]= React.useState(initial);
    const [itemAdd,setItemAdd] = React.useState(0);

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

    //Defines a function to add the amount of products selected to the cart, if there's enough quantity in the stock. It also updates the stock.
    function addProducts(){
        if (count <= item.stock){
            onAdd(count);
            setItemAdd(itemAdd + count);
            console.log(item.stock)
        }
    }

    return(
        //Renders the counter and "add"/"reduce" buttons, along with the stock of the item
        <div>
            <div className="itemCount">
                <button className="itemCountButton" onClick = {onReduce}>-</button>
                <p className="itemCountInput">{count}</p>
                <button className="itemCountButton" onClick={onIncrease}>+</button>
                <button className="itemAddButton" onClick = {addProducts}>Agregar</button>
            </div>
            <div className="itemStock">
            <p>Productos agregados: {itemAdd}</p>
            <p>Stock: {item.stock}</p> 
            
            </div>
        </div>
    )
}
    
export default ItemCount