import React from 'react';
import Banner from '../Banner';
import Psycologist from '../Images/banner.jpg'
import Psychologists from '../Psychologist/Psychologists';
const Home = () => {
    return (
        <div className='mb-5 mt-20'>
            <div>
                <img className='w-full h-screen' src={Psycologist} alt="" />
            </div>
            <div class="flex flex-col w-full">
                <div class="divider"></div>
            </div>
            <Banner></Banner>
            <Psychologists></Psychologists>
        </div>
    );
};

export default Home;