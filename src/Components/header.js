import React from 'react';
import './index.css';

function Header() {


    return(
        <>
            <div className='header'>
                <a className="logo" href="https://toneopeats.com/"><img src="/Images/logo.png" /></a>
                    <ul style={{display:"flex", listStyle:"none" }}>
                        <li style={{marginRight:"25px", color:"#80b53b"}}><b>Meal Subscription</b></li>
                        <li>Menu</li>
                    </ul>
                <div>
                    <p style={{cursor: "pointer"}}>_</p>
                </div>
            </div>
        </>
    )    
}

export default Header;