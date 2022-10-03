import React from "react";

const Success = ({id}) => {
    return (
        <div>
            <h1>Felicitaciones!</h1>
            <p>La Orden de Compra de Compra se generó con el ID: <b>{id}</b></p>
        </div>
    )
}

export default Success;