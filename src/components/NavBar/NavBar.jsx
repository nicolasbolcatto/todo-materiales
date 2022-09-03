//imports CartWidget component and css file for NavBar
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
    
    //Renders the navbar and the CartWidget component

    return(
        <nav className="nav">
            <div className="topNav">
                <div className="title">
                    <h1>Todo Materiales</h1>
                    <h2>Tu tienda online para la construcción</h2>
                </div>
                <div className="cartWidget">
                    <CartWidget />
                </div>
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