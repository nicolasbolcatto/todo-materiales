import React from "react";
import './Success.css';

const Success = ({id}) => {
    return (
        <div className="successContainer">
            <div className="imgContainer">
                <img src="../../logo/architect.png" alt="shopping finished" />
            </div>
            
            <h1>Gracias!</h1>
            <p>Tu Orden de Compra se generó con el ID: <b>{id}</b></p>
        </div>
    )
}

export default Success;