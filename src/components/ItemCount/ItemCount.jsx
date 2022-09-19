//Imports css file for ItemCount
import React,{useContext, useState} from "react";
import './ItemCount.css';
import { Link } from "react-router-dom";
import {CartContext} from "../../context/CartContext";

function ItemCount ({item,initial}) {

    const context = useContext(CartContext)
    //Defines Hook for state "count"
    const [count,setCount]= useState(initial);
    const [itemAdd,setItemAdd] = useState(0);

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
    function onAdd(){
        if (count <= item.stock){    
            item.stock -= count;
            setItemAdd(itemAdd + count);
            context.addItem(item,count);
        }
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
            {itemAdd === 0 ? 
                <div className="itemCount">
                    <button className="itemCountButton" onClick = {onReduce}>-</button>
                    <p className="itemCountInput">{count}</p>
                    <button className="itemCountButton" onClick={onIncrease}>+</button>
                    <button className="itemAddButton" onClick = {onAdd}>Agregar</button>
                    <div className="itemStock">
                        <p>Stock: {item.stock}</p>
                    </div>
                    
                </div>
                :
                <div>
                    <Link to={"/cart"}>
                    <div className="itemCount">
                        <button className="itemEndButton">Ver carrito</button>
                    </div>
                    </Link>
                    <button className="itemRemoveButton" onClick = {onRemove}>Eliminar item del carrito</button>
                </div>
            }

        </div>
    )
}
    
export default ItemCount