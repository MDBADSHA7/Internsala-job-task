import React from 'react';
import Banner from '../Banner';
import ExtraSection from '../ExtraSection/ExtraSection';
import Psycologist from '../Images/mn.jpg'
import Psychologists from '../Psychologist/Psychologists';
import Info from './Info/Info';
import PsycologistChair from './PsycologistChair/PsycologistChair';
import Services from './Services/Services';
const Home = () => {
    return (
        <div className='mb-5 mt-20 px-10'>
            <div>
                <img className='w-full h-screen' src={Psycologist} alt="" />
            </div>
            <div class="flex flex-col w-full">
                <div class="divider"></div>
            </div>
            <PsycologistChair></PsycologistChair>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Psychologists></Psychologists>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;