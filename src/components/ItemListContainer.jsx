import React from "react";

const ItemListContainer = (props) => {
    return(
        <div className="itemList">
            <div className="item">
                <h2>{props.greeting}</h2>
            </div>
            <div className="item">
                <h2>Albañilería</h2>
            </div>
            <div className="item">
                <h2>Pisos y revestimientos</h2>
            </div>
            <div className="item">
                <h2>Aceros y chapas</h2>
            </div>
            <div className="item">
                <h2>Maderas</h2>
            </div>
            <div className="item">
                <h2>Pinturas y selladores</h2>
            </div>
        </div>
    )
    }
    
export default ItemListContainer