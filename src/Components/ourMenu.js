import React, {useEffect, useState, useRef} from 'react';
import './index.css';

const dishes = [
  {
    id:"kcal-100",
    name:"Blooming Red Juice",
    images: "/Images/Blooming_Red_Juice-removebg-preview.webp"
  },{
    id:"kcal-101",
    name:"Chicken Protein Power Bowl",
    images: "/Images/Chicken_Protein_Power_Bowl_1-removebg-preview.webp"
  },{
    id:"kcal-102",
    name:"Falafel Hummus Salad Bow",
    images: "/Images/Falafel___Hummus_Salad_Bowl_1-removebg-preview.webp"
  },{
    id:"kcal-103",
    name:"Paneer Chickpeas Tikki with Brown rice",
    images: "/Images/Paneer___Chickpeas_Tikki_with_Brown_rice-removebg-preview.webp"
  },{
    id:"kcal-104",
    name:"Quinoa Sweet Potato Salad Bow",
    images: "/Images/Quinoa___Sweet_Potato_Salad_Bowl1-removebg-preview.webp"
  },{
    id:"kcal-105",
    name:"Pink Chia Juice",
    images: "/Images/Pink_Chia_Juice-removebg-preview.webp"
  },{
    id:"kcal-106",
    name:"Green Love Juice",
    images: "/Images/Green_Love_Juice-removebg-preview.webp"
  },{
    id:"kcal-107",
    name:"Immune Booster Juice",
    images: "/Images/Immune_Booster_Juice-removebg-preview.webp"
  },{
    id:"kcal-108",
    name:"Immune Booster Juice",
    images: "/Images/Immune_Booster_Juice-removebg-preview.webp"
  }
];
const delay = 2500;
const benefits = [
    "Every dish is prepared in olive oil",
    "No added sugar, color or preservatives",
    "Designed as per calorie requirements",
    "Nutrition and portions planned by expert dieticians",
    "High protein and low carb food",
    "Made with fresh and best quality ingredients",
    "Flexibility of plans",
    "On-time doorstep delivery"
]

function OurMenu() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
  
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === dishes.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
      return () => {
        resetTimeout();
      };
    }, [index]);

    return(
        <>
            <div className="slideshow">
                <div style={{display: "flex", justifyContent:"center"}}>
                  <h1 style={{marginTop: "50px"}}>OUR</h1>
                  <h1 style={{marginTop: "50px", marginLeft:"5px", color:"#80b53b"}}>MENU</h1>
                </div>
                <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 10}%, 0, 0)` }}
                >
                    {dishes.map((item, index) => (
                    <div
                        className="slide"
                        key={index}
                    >
                      <img src={item.images}/>
                      <p>{item.name}</p>
                      <p className='kcal'>{item.id}</p>
                    
                    </div>
                    ))}
                </div>
            </div>
            <img className='comingSoonImage' alt='comingSoon' src='/Images/Coming_Soonf.jpg'/>
            <h1 style={{textAlign:"start",marginLeft:"138px"}}>Health & Taste At</h1>
            <h1 style={{textAlign:"start",marginLeft:"138px", color:"#80b53b"}}>Your Doorstep</h1>
            <div style={{display: "flex", justifyContent:"flex-end"}}>
                <div>
                    {benefits.map((item, index) =>{
                        return (
                            <div className='benefits' key={index}>
                                <span style={{marginTop:"12px", marginRight:"7px"}}>🍃</span>
                                <p>{item}</p>
                            </div>
                            )}
                    )}
                </div>
                <div className='bannerImg'>
                    <img alt='bannerimg' src='/Images/bannerimg.webp'/>
                </div>
            </div>
        </>
    )
    
}

export default OurMenu;