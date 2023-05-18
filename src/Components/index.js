import React from 'react';
import Header from "./header";
import OurMenu from "./ourMenu";
import SubscriptionPlan from "./subscriptionPlan";
import Testimonial from "./testimonial";
import Footer from "./footer";
import './index.css';


function Index() {

    return(
        <div className='base'>
            <Header/>
            <OurMenu/>
            <SubscriptionPlan/>
            <Testimonial/>
            <Footer/>
        </div>
    )
}

export default Index;