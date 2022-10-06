import React from 'react'
import './Error404.css'
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
        <div className="imgContainer404">
            <p className='text404'>Oh no! Parece que la página que estás buscando no existe!</p>     
        </div>
        <div className="imgContainer404">
            <img src="../../logo/damaged.png" alt="damaged house" />
        </div>
        <Link style={{textDecoration: 'none'}} to={"/"}>
            <div className="exploreItemsButtonContainer404">
                <button className="exploreItemsButton404">Explorar materiales</button>
            </div>
            
        </Link>
    </div>
  )
}

export default Error404