//Imports ItemList component and useEffect/useState Hooks
import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    
    //Defines a State for this component
    const [items, setItems] = useState([]);
    //Defines an Effect for this component
    useEffect(() => {

        //Fetches data from local json in public folder (will be replaced by real
        //database later)
        fetch("products.json").then(response => {
            return response.json();
        }).then(database => {
            //console.log(database)
            setTimeout(()=>{
                setItems(database)
            },2000)
        }).catch(error => console.log("Hubo un error en la carga de datos: " + error))
    
    },[]);
    return(
        //Returns the item list
        <div>
            <ItemList items={items} />
        </div>
    )
    }
    
export default ItemListContainer