//Imports ItemList component and useEffect/useState Hooks
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";

const ItemListContainer = () => {
    
    //Defines params to read route
    const {id} = useParams();
    //console.log(id)

    //Defines a State for this component
    const [items, setItems] = useState([]);


    //Defines an Effect for this component
    useEffect(() => {

        const db = getFirestore();

        const itemsCollection = collection(db, "items");

        const queryItems =  id ? query(itemsCollection, where("categoryId", "==", Number(id))) : itemsCollection;
      
        getDocs(queryItems).then((snapshot) => {

            if (snapshot.size > 0){
                
                setItems(snapshot.docs.map(item => ({id: item.id, ...item.data()})))

            }
            
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