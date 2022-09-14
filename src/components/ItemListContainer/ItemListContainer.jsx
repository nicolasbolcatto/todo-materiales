//Imports ItemList component and useEffect/useState Hooks
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    
    //Defines a State for this component
    const [items, setItems] = useState([]);

    //Defines params to read route
    const {id} = useParams();
    //console.log(id)

    //Defines an Effect for this component
    useEffect(() => {

        //Fetches data from local json in public folder (will be replaced by real
        //database later)
        fetch("../../products.json").then(response => {

            return response.json();
            
        }).then(database => {
            //console.log(database)
            setTimeout(()=>{
                
                //Formats image path for getting local images
                database.forEach((item)=> {item.image = "../." + item.image})
                
                //If no categoryId is defined in the params of the route, setItems is set to the array of items of that category
                //If categoryId is not defined in the params of the route, setItems is set to full array of items
                if (id != null){
                    const filteredByCategory = database.filter(item => item.categoryId === Number(id))
                    //console.log(filteredByCategory)
                    setItems(filteredByCategory)
                } else {
                    setItems(database)
                }
            },2000)
        }).catch(error => console.log("Hubo un error en la carga de datos: " + error))
    
    },[id]);
    return(
        //Returns the item list
        <div>
            <ItemList items={items} />
        </div>
    )
    }
    
export default ItemListContainer