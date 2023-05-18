import React, { useState } from 'react';

const vegDishes = [
    {
      id:"kcal-100",
      name:"Falafel Hummus Salad Bow",
      images: "/Images/Falafel___Hummus_Salad_Bowl_1-removebg-preview.webp"
    },{
      id:"kcal-102",
      name:"Vegetable Salad Bow",
      images: "/Images/Falafel___Hummus_Salad_Bowl_1-removebg-preview.webp"
    },{
      id:"kcal-104",
      name:"Quinoa Sweet Potato Salad Bow",
      images: "/Images/Quinoa___Sweet_Potato_Salad_Bowl1-removebg-preview.webp"
    }
];

const nonVegDishes = [
    {
        id:"kcal-101",
        name:"Chicken Protein Power Bowl",
        images: "/Images/Chicken_Protein_Power_Bowl_1-removebg-preview.webp"
    },{
        id:"kcal-103",
        name:"Paneer Chicken Tikki with Brown rice",
        images: "/Images/Paneer___Chickpeas_Tikki_with_Brown_rice-removebg-preview.webp"
    }
];

const dishes = [
    {
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
    }
];

function SubscriptionPlan() {
    const [veg, setVeg] = useState(true);
    const [nonVeg, setNonVeg] = useState(false);
    const [lunch, setLunch] = useState(true);
    const [dinner, setDinner] = useState(false);
    const [checkedList, setCheckedList] = useState([]);

    const handleSelect = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;
     
        if (isChecked) {
          //Add checked item into checkList
          setCheckedList([...checkedList, value]);
        } else {
          //Remove unchecked item from checkList
          const filteredList = checkedList.filter((item) => item !== value);
          setCheckedList(filteredList);
        }
        console.log(checkedList)
      };

    return(
        <div className='subscription'>
            <div style={{display:"flex", justifyContent:"start"}}>
                    <img src='/Images/subscriptionbg.webp' />
                    <h1 style={{position: "absolute",color: "white", marginTop:"90px", marginLeft:"170px"}}>SUBSCRIPTION</h1>
                    <h1 style={{position: "absolute",color: "#80b53b", marginTop:"150px", marginLeft:"240px"}}>PLAN</h1>
                <div style={{marginLeft:"3%"}}>
                    <h1>Select Your Prefrence</h1>
                    <div className='selectPreference'>
                        <p>Diet Prefrence</p>
                        <div style={{display:"flex"}}>
                            <button className='preferenceButtons' style={{backgroundColor: veg ? "#80b53b" : "white" , color: veg && "white"}} onClick={()=> setVeg(!veg)}>Veg</button>
                            <button className='preferenceButtons' style={{backgroundColor: nonVeg ? "#80b53b" : "white", color: nonVeg && "white"}} onClick={()=> setNonVeg(!nonVeg)}>Non-Veg</button>
                        </div>
                    </div>
                    <div className='selectPreference'>
                        <p>Select Meal Time</p>
                        <div style={{display:"flex"}}>
                            <button className='preferenceButtons' style={{backgroundColor: lunch ? "#80b53b" : "white", color: lunch && "white"}} onClick={()=> setLunch(!lunch)}>Lunch</button>
                            <button className='preferenceButtons' style={{backgroundColor: dinner ? "#80b53b" : "white", color: dinner && "white"}} onClick={()=> setDinner(!dinner)}>Dinner</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='subscribeDishes'>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <h1 style={{cursor: "pointer"}}>Lunch Packages</h1>
                    {dinner && <h1 style={{cursor: "pointer"}}>Dinner Packages</h1>}
                </div>
                <div style={{borderTop:"5px solid #e8eee0"}}>
                    {veg && !nonVeg ? vegDishes.map((item, index) => (
                        <div
                            className="selectDishes"
                            key={index}
                        >
                            <input type='checkBox' value={item.name} onChange={(e) => handleSelect(e)}/>
                            <img className='dishes' src={item.images}/>
                            <p>{item.name}</p>
                        </div>
                    )) : !veg && nonVeg ? nonVegDishes.map((item, index) => (
                        <div
                            className="selectDishes"
                            key={index}
                        >
                            <input type='checkBox' value={item.name} onChange={(e) => handleSelect(e)}/>
                            <img className='dishes' src={item.images}/>
                            <p>{item.name}</p>
                        </div>
                    )) : veg && nonVeg ? dishes.map((item, index) => (
                        <div
                            className="selectDishes"
                            key={index}
                        >
                            <input type='checkBox' value={item.name} onChange={(e) => handleSelect(e)}/>
                            <img className='dishes' src={item.images}/>
                            <p>{item.name}</p>
                        </div>
                    )): vegDishes.map((item, index) => (
                        <div
                            className="selectDishes"
                            key={index}
                        >
                            <input type='checkBox' value={item.name} onChange={(e) => handleSelect(e)}/>
                            <img className='dishes' src={item.images}/>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            {checkedList.length !== 0 && <div>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <div  className='price'>
                        <div style={{borderBottom:"2px solid #e8eee0"}}>
                            <input type='checkBox'></input>
                            <p>3 Days</p>
                        </div>
                        <p><b> 	&#8377; 158</b>/per Meal</p>
                        <div style={{display:"flex", borderBottom:"2px solid #e8eee0", justifyContent:"center"}}>
                            <p>	&#8377; 435 for 3 Days</p>
                            <p>20% Off</p>
                        </div>
                        <p>Free Delivery</p>

                    </div>
                    <div  className='price'>
                        <div style={{borderBottom:"2px solid #e8eee0"}}>
                            <input type='checkBox'></input>
                            <p>7 Days</p>
                        </div>
                        <p><b> 	&#8377; 139</b>/per Meal</p>
                        <div style={{display:"flex", borderBottom:"2px solid #e8eee0", justifyContent:"center"}}>
                            <p> 	&#8377; for 7 Days</p>
                            <p>30% Off</p>
                        </div>
                        <p>Free Delivery</p>

                    </div>
                </div>
                <button className='preferenceButtons' style={{color: "white", backgroundColor:"#80b53b", fontSize:"20px", marginTop: "10px"}}>PROCEED</button>
            </div>}
        </div>
    )
}

export default SubscriptionPlan;