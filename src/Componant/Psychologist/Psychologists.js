import React from 'react';
import psycologist1 from '../Images/p-1.jpg'
import psycologist2 from '../Images/p-2.jpg'
import psycologist3 from '../Images/p-3.jpg'
import psycologist4 from '../Images/p-4.jpg'
import psycologist5 from '../Images/p-5.jpg'
import psycologist6 from '../Images/p-6.jpg'
import Psycologist from './Psycologist';
const psycologists = [
    { id: 1, img: psycologist1, name: 'Ashwin Thapa', education: 'B.sc in Psycology', experience: '3 year', speciality: 'Forensic Psycologist' },
    { id: 2, img: psycologist2, name: 'Elbac Mehadi', education: 'B.sc in Psycology', experience: '2 year', speciality: 'School Psycologist' },
    { id: 3, img: psycologist3, name: 'Rocky Jonson', education: 'B.sc in Psycology', experience: '5 year', speciality: 'Clinical Psycologist' },
    { id: 4, img: psycologist4, name: 'Wiliam Crush', education: 'B.sc in Psycology', experience: '3 year', speciality: 'Neuro Psycologist' },
    { id: 5, img: psycologist5, name: 'Jackob Barty', education: 'B.sc in Psycology', experience: '1 year', speciality: 'Health Psycologist' },
    { id: 6, img: psycologist6, name: 'Maria zeneb', education: 'B.sc in Psycology', experience: '5 year', speciality: 'Sport Psycologist' }
]
const Psychologists = () => {
    return (
        <div className='trainer-container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'> {
            psycologists.map(psycologist => <Psycologist
                key={Psycologist.id}
                psycologist={psycologist}
            >
            </Psycologist>)
        }
        </div>
    );
};

export default Psychologists;