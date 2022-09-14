//imports CartWidget component and css file for NavBar
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import {Link} from "react-router-dom"

const NavBar = () => {
    
    //Renders the navbar and the CartWidget component

    return(
        <nav className="nav">
            <div className="topNav">
                <Link style={{textDecoration: 'none'}} to={"/"}>
                    <div className="title">
                        <h1>Todo Materiales</h1>
                        <h2>Tu tienda online para la construcción</h2>
                    </div>
                </Link>
                
                <div className="cartWidget">
                    <CartWidget />
                </div>
            </div>
                
            <div className="buttons">

                <Link className="navButton" style={{textDecoration: 'none'}} to={"/"}>
                    <div>
                        <p>Inicio</p>
                    </div>
                </Link>

                <Link className="navButton" style={{textDecoration: 'none'}} to={"/category/0"}>
                    <div>
                        <p>Pisos</p>
                    </div>
                </Link>
                
                <Link className="navButton" style={{textDecoration: 'none'}} to={"/category/1"}>
                    <div>
                        <p>Vidrios</p>
                    </div>  
                </Link>
                
                <Link className="navButton" style={{textDecoration: 'none'}} to={"/category/2"}>
                    <div>
                        <p>Albañilería</p>
                    </div>
                </Link>

                <Link className="navButton" style={{textDecoration: 'none'}} to={"/category/3"}>
                    <div>
                        <p>Electricidad</p>
                    </div>
                </Link>
                
                <Link className="navButton" style={{textDecoration: 'none'}} to={"/category/4"}>
                    <div>
                        <p>Griferías y sanitarios</p>
                    </div>
                </Link>
                
            </div>
            
        </nav>
    )
}

export default NavBar