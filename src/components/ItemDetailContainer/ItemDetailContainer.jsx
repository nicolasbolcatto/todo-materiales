import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        
        fetch("products.json").then(response => {
            return response.json();

        }).then(database => {

            setTimeout(()=>{
                const product = database.find((prod) => prod.id === Number(id));
                //console.log(product)
                product.stock = Number(product.stock)
                setItem(product);
            },3000);

        }).catch(error => console.log("Hubo un error en la carga de datos: " + error))
    
    },[id]);

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