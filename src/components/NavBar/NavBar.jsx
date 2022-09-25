//imports CartWidget component and css file for NavBar
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import {Link} from "react-router-dom"
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const NavBar = () => {

    const context = useContext(CartContext)
    
    //Creates a list of links to each category
    const arrayLinks = [
        {link: "/", name: "Inicio", categoryId: 999 },
        {link: "/category/0", name: "Pisos", categoryId: 0 },
        {link: "/category/1", name: "Aberturas", categoryId: 1 },
        {link: "/category/2", name: "Albañilería", categoryId: 2 },
        {link: "/category/3", name: "Electricidad", categoryId: 3 },
        {link: "/category/4", name: "Griferías y sanitarios", categoryId: 4 },
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
                    
                    {arrayLinks.map(x => (<li key={x.categoryId}><Link className="navButton" style={{textDecoration: 'none'}} to={x.link}>{x.name}</Link></li>))}
                </ul>
                {/* Conditional rendering of CartWidget if items in cart */}
                {context.totalItemsInCart() ? <div className="cartWidget"> <CartWidget /> </div> : <div className="noShow"></div>}
                
            </div>
            
        </nav>
    )
}

export default NavBar