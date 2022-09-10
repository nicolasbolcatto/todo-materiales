import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])

    useEffect(()=>{
        fetch("products.json").then(response => {
            return response.json();
        }).then(database => {
            //console.log(database)
            setTimeout(()=>{
                const product = database.find((prod) => prod.id === 1);
                setItem(product);
            },3000)
        }).catch(error => console.log("Hubo un error en la carga de datos: " + error))
    
    },[]);
    return(
        <div>
            <ItemDetail item={item}/>
        </div>
        //Returns the item detail component
    )

}
    
export default ItemDetailContainer