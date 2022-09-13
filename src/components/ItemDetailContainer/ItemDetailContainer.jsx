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
                product.stock = Number(product.stock)
                setItem(product);
            },3000);
        }).catch(error => console.log("Hubo un error en la carga de datos: " + error))
    
    },[]);

function onAdd(count){
    item.stock -= count;
}

    return(
        <div>
            <ItemDetail item={item} initial={1} onAdd={onAdd}/>
        </div>
        //Returns the item detail component
    )

}
    
export default ItemDetailContainer