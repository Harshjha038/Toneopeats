import React from 'react';

const testimonial = [
    {
        image:"/Images/User 1.png",
        description:" Their delicious and nutritious meals make it easy to avoid junk food. With their exceptional quality, timely delivery, and wide variety of options, ToneOpEats is my go-to choice for healthy eating.",
        name:"Suchita Sharma"
    },
    {
        image:"/Images/User 2.png",
        description:" Ankit's healthy smile says it all! With ToneOpEats, he's not only enjoying delicious and premium meals, but also feeling great about his overall health.",
        name:"Rohit Singh Rajput"
    }
]

function Testimonial () {

    return(
        <div className='testimonials'>
            <div style={{display: "flex", justifyContent:"center"}}>
                <h1 style={{marginTop: "50px"}}>Testimonial</h1>
                <h1 style={{marginTop: "50px", marginLeft:"5px", color:"#80b53b"}}>#healthysmiles</h1>
            </div>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                {
                    testimonial.map((item, index) => {
                        return (
                            <div style={{display:"flex"}} key={index}>
                                <img className='testimonialImages' alt='testimonials' src={item.image} />
                                <div>
                                    <p style={{width:"200px"}}>{item.description}</p>
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Testimonial;