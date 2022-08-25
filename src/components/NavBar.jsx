import React from "react";

const NavBar = () => {
    return(
        <nav className="nav">
            <div className="title">
                <h1>Todo Materiales</h1>
                <h2>Tu tienda online para la construcción</h2>
            </div>
            <div className="buttons">
                <div className="navButton">
                    <p>Inicio</p>
                </div>
                <div className="navButton">
                    <p>Catálogo</p>
                </div>
                <div className="navButton">
                    <p>Mapa</p>
                </div>
                <div className="navButton">
                    <p>Envíos</p>
                </div>
                <div className="navButton">
                    <p>Contacto</p>
                </div>
            </div>
            
            
        </nav>
    )
}

export default NavBar