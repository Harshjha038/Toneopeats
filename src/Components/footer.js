import React from "react";

const data=[
    {
        heading:"Our Address",
        description:"EM-Kitchen-5/East Building, Rani Kamlapati Railway Station, Habib Ganj, Bhopal, Madhya Pradesh 462023"
    },{
        heading:"Opening Hours",
        description:"Mon - Sun 10:00 AM - 11:30 PM"
    },{
        heading:"Contact Us",
        description:"Email : info@toneopeats.com Phone: 7400989898"
    },
]

function Footer() {

    return(
        <div className="footer">
            <div>
                <a className="logo" href="https://toneopeats.com/"><img alt="logo" src={process.env.PUBLIC_URL +"/Images/logo.png"} /></a>
                <div className="contactDetails">
                    {data.map((item, index) => {
                        return(
                            <div key={index}>
                                <h3>{item.heading}</h3>
                                <p style={{width: "250px"}}>{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            
            <div className="social">
                <div style={{display:"flex", justifyContent:"center", marginTop: "20px"}}>
                    <a href=""><img alt="social" className="icons" src={process.env.PUBLIC_URL +"/Images/social/instagram.png"}/></a>
                    <a href=""><img alt="social" className="icons" src={process.env.PUBLIC_URL +"/Images/social/facebook.png"}/></a>
                    <a href=""><img alt="social" className="icons" src={process.env.PUBLIC_URL +"/Images/social/linkedin.png"}/></a>
                    <a href=""><img alt="social" className="icons" src={process.env.PUBLIC_URL +"/Images/social/twitter.png"}/></a>
                    <a href=""><img alt="social" className="icons" src={process.env.PUBLIC_URL +"/Images/social/youtube.png"}/></a>
                </div>
            <p>© Copyright All rights reserved by TONEOPEATS</p>
            </div>
        </div>
    )   
}

export default Footer;