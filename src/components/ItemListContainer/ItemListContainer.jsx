//Imports ItemList component and useEffect/useState Hooks
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import Loading from "../Loading/Loading";

const ItemListContainer = () => {
    
    //Defines params to read route
    const {id} = useParams();
    //console.log(id)

    //Defines a State for this component
    const [items, setItems] = useState([]);

    //Defines a State to handle Loading Component Logic
    const [loading, setLoading] = useState(true);


    //Defines an Effect for this component
    useEffect(() => {

        const db = getFirestore();

        const itemsCollection = collection(db, "items");

        const queryItems =  id ? query(itemsCollection, where("categoryId", "==", Number(id))) : itemsCollection;
      
        getDocs(queryItems).then((snapshot) => {

            if (snapshot.size > 0){
                setTimeout(()=>{
                    setItems(snapshot.docs.map(item => ({id: item.id, ...item.data()})))
                    items.forEach((item)=> {item.image = "../." + item.image})
                    setLoading(false);
                },500)
                
            }
            
        }).catch(error => console.log("Hubo un error en la carga de datos: " + error))
    
    },[id,items]);
    return(
        //Returns the item list
        <div>
            {loading ? <Loading/> : <ItemList items={items} />}
            
        </div>
    )
    }
    
export default ItemListContainer