//imports CartWidget component and css file for NavBar
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import {Link} from "react-router-dom"

const NavBar = () => {
    
    //Creates a list of links to each category
    const arrayLinks = [
        {link: "/", name: "Inicio" },
        {link: "/category/0", name: "Pisos" },
        {link: "/category/1", name: "Vidrios" },
        {link: "/category/2", name: "Albañilería" },
        {link: "/category/3", name: "Electricidad" },
        {link: "/category/4", name: "Griferías y sanitarios" },
    ]
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
                
                
            </div>

            
                
            <div className="buttons">
                <ul className="navList">
                    
                    {arrayLinks.map(x => (<li><Link className="navButton" style={{textDecoration: 'none'}} to={x.link}>{x.name}</Link></li>))}
                </ul>
                <div className="cartWidget">
                <CartWidget />
                </div>
            </div>
            
        </nav>
    )
}

export default NavBar