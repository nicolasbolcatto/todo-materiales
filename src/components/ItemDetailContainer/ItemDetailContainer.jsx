import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        
        fetch("../../products.json").then(response => {
            return response.json();

        }).then(database => {

            setTimeout(()=>{
                const product = database.find((prod) => prod.id === Number(id));
                //console.log(product)
                product.image = "../." + product.image;
                product.stock = Number(product.stock)
                setItem(product);
            },2000);

        }).catch(error => console.log("Hubo un error en la carga de datos: " + error))
    
    },[id]);


    return(
        <div>
            <ItemDetail item={item} initial={1}/>
        </div>
        //Returns the item detail component
    )

}
    
export default ItemDetailContainer