import React from 'react';
import Banner from '../Banner';
import Psycologist from '../Images/banner.jpg'
const Home = () => {
    return (
        <div className='mb-5'>
            <div>
                <img className='w-full h-screen' src={Psycologist} alt="" />
            </div>
            <div class="flex flex-col w-full">
                <div class="divider"></div>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default Home;