import React from 'react';
import InfoCard from './InfoCard';
import clock from "../../Images/Clock.png";
import marker from "../../Images/marker.png";
import phone from "../../Images/Phone.png";
const Info = () => {
    return (
        <div>
            <div className='mb-10'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <InfoCard cardTittle="Opening Hours" cardInfo="You can take appointment for anytime.There is no holiday of our serveces.You will get our services 24 hours except big issu !!" bgclass="bg-gradient-to-r from-cyan-500 to-blue-500" img={clock}></InfoCard>
                    <InfoCard cardTittle="Our Locations" cardInfo="This is our Google location.If anyone want to get our services he can easily search our location by using this marker !!" bgclass="bg-gradient-to-r from-cyan-500 to-blue-500" img={marker}></InfoCard>
                    <InfoCard cardTittle="Contact Us" cardInfo="This is our Phone information.If anyone want to booking appointment,he/she can contact with us by using phone call !!" bgclass="bg-gradient-to-r from-cyan-500 to-blue-500" img={phone}></InfoCard>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Info;