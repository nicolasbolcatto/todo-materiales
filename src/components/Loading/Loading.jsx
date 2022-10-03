import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './Loading.css';


const Loading = () => {

    
    const [logo, setLogo] = useState("../../logo/blueprint.png");

    useEffect(() => {
        const logos = ["../../logo/blueprint.png","../../logo/builder.png","../../logo/construction.png","../../logo/house.png","../../logo/wall.png"]
        let randomNumber = Math.floor(Math.random() * logos.length);
        setLogo(logos[randomNumber]); 
    },[])

    return (
        <div className='loadingContainer'>
                {<p><img src={logo} alt="logo" width="180" /></p>}
                <h3>Cargando...</h3>
        </div>
    );
};

export default Loading;

