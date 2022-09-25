import React,{useContext, useState} from "react";
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css';
import { Link } from "react-router-dom";
import {CartContext} from "../../context/CartContext";


const ItemDetail = ({item}) => {

    const context = useContext(CartContext)

    const initial = 1
    //Defines Hook for state "count"
    const [count,setCount]= useState(initial);
    const [itemAdd,setItemAdd] = useState(0);
    
    //Defines a function to add the amount of products selected to the cart, if there's enough quantity in the stock. It also updates the stock.
    function onAdd(){
        if (count <= item.stock){    
            item.stock -= count;
            setItemAdd(itemAdd + count);
            context.addItem(item,count);
        }
    }

    return(
        //Returns the item detail
        <div className="itemDetailContainer">
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
                    {itemAdd === 0 ?
                        <ItemCount item={item} initial={1} onAdd={onAdd} count={count} setCount={setCount} itemAdd={itemAdd} setItemAdd={setItemAdd}/>
                        :
                        <Link style={{textDecoration: 'none'}} to={"/cart"}>
                            <div className="itemCount">
                                <button className="itemEndButton">Ver carrito</button>
                            </div>
                        </Link>
                }
                
                </div>
            </div>
            
            
        </div>
    )
    }
    
export default ItemDetail