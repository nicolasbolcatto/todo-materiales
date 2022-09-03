//Imports ItemList component and useEffect/useState Hooks
import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    
    //Defines a State for this component
    const [items, setItems] = useState([]);
    //Defines an Effect for this component
    useEffect(() => {

        //Creates a list of products. This will be replaced by a fetch action on a json file in the future
        const products = [{id: 1, image: require("./img/piso-vinilico.png"), name:"Piso vinílico 2mm Simil Madera", price:"350", stock:"10"},
        {id: 2, image: require("./img/ladrillo-vidrio.png"), name:"Ladrillo de vidrio 19 x 19 x 8", price:"980", stock:"20"},
        {id: 3, image: require("./img/pegamento-ceramicas-weber.png"), name:"Pegamento Cerámicos Weber Pro 30 kg", price:"2300", stock:"15"},
        {id: 4, image: require("./img/disyuntor.png"), name:"Disyuntor diferencial Schneider 2x40a", price:"10300", stock:"5"},
        {id: 5, image: require("./img/cable-unipolar-4mm.png"), name:"Cable Unipolar 4 mm Broke Rollo X100 Mts", price:"6400", stock:"3"},
        {id: 6, image: require("./img/ducha-monocomando.png"), name:"Griferia Ducha Monocomando Exterior con Transferencia", price:"8500", stock:"6"}];

        //Defines a promise with a 2 sec delay to simulate getting data from server
        const promise = new Promise((resolve,reject) =>{
            setTimeout(()=>{
                resolve(products);
            },2000);
        });
        
        promise.then((response) => {
            //Updates the state of the variable items with the response from the promise
            setItems(response);
        }).catch((error) => console.log("Falló la carga de datos"))
    },[]);

    return(
        //Returns the item list
        <div>
            <ItemList items={items} />
        </div>
    )
    }
    
export default ItemListContainer