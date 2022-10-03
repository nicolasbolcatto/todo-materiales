import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {doc, getDoc, getFirestore} from "firebase/firestore";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        const db = getFirestore();

        const item = doc(db, "items", id);

        getDoc(item).then((snapshot) => {

            if (snapshot.exists()){
                setTimeout(() =>{
                    setItem({id: snapshot.id, ...snapshot.data()})
                    item.image = "../." + item.image
                    setLoading(false);
                },500)
                
            }
            
        }).catch(error => console.log("Hubo un error en la carga de datos: " + error))
    
    },[id]);

    

    return(
        <div>
            {loading ? <Loading/> : <ItemDetail item={item} initial={1}/>}
        </div>
        //Returns the item detail component
    )

}
    
export default ItemDetailContainer