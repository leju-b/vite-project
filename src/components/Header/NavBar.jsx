import React from 'react';
import "./header.css";
const Navbar = () =>{
    return(
        <nav>
            <div className='NavBar'>
                <img src="./images/reactjs-icon.png" alt="" className='nav--icon'/>
                <h3 className='nav--logo_text'>ReactFacts</h3>  
                <h4 className='nav--title'>React Course - Project 1</h4>
            </div>
        </nav> 
    )
}

export default Navbar