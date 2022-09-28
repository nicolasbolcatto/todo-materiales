import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {doc, getDoc, getFirestore} from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();
    useEffect(()=>{

        const db = getFirestore();

        const item = doc(db, "items", id);

        getDoc(item).then((snapshot) => {

            if (snapshot.exists()){
                
                setItem({id: snapshot.id, ...snapshot.data()})

            }
            
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