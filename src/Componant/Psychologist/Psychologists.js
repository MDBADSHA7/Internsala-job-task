import React from 'react';
import { useState } from 'react';
import psycologist1 from '../Images/p-1.jpg'
import psycologist2 from '../Images/p-2.jpg'
import psycologist3 from '../Images/p-3.jpg'
import psycologist4 from '../Images/p-4.jpg'
import psycologist5 from '../Images/p-5.jpg'
import psycologist6 from '../Images/p-6.jpg'
import psycologist7 from '../Images/p-7.jpg'
import psycologist8 from '../Images/p-8.jpg'
import psycologist9 from '../Images/p-9.jpg'
import BookingModal from '../Modal/BookingModal';
import Psycologist from './Psycologist';
const psycologists = [
    { id: 1, img: psycologist1, name: 'Ashwin Thapa', education: 'B.sc in Psycology', experience: '3 year', speciality: 'Forensic Psycologist' },
    { id: 2, img: psycologist2, name: 'Elbac Mehadi', education: 'B.sc in Psycology', experience: '2 year', speciality: 'School Psycologist' },
    { id: 3, img: psycologist3, name: 'Rocky Jonson', education: 'B.sc in Psycology', experience: '5 year', speciality: 'Clinical Psycologist' },
    { id: 4, img: psycologist4, name: 'Wiliam Crush', education: 'B.sc in Psycology', experience: '3 year', speciality: 'Neuro Psycologist' },
    { id: 5, img: psycologist5, name: 'Jackob Barty', education: 'B.sc in Psycology', experience: '1 year', speciality: 'Health Psycologist' },
    { id: 6, img: psycologist6, name: 'Maria zeneb', education: 'B.sc in Psycology', experience: '5 year', speciality: 'Sport Psycologist' },
    { id: 7, img: psycologist7, name: 'Fatia Elbac', education: 'B.sc in Psycology', experience: '3 year', speciality: 'Clinical Psycologist' },
    { id: 8, img: psycologist8, name: 'Safia Lasry', education: 'B.sc in Psycology', experience: '2 year', speciality: 'School Psycologist' },
    { id: 9, img: psycologist9, name: 'Aya Blasin', education: 'B.sc in Psycology', experience: '1 year', speciality: 'School Psycologist' }
]

const Psychologists = () => {
    const [psycologist, setPsycologist] = useState(null);
    return (
        <div>
            <h1 className='text text-3xl font-bold text-center mt-10'>Welcome to our Psycologist Section !!</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 align-middle justify-items-center'> {
                psycologists.map(psycologist => <Psycologist
                    key={Psycologist.id}
                    psycologist={psycologist}
                    setPsycologist={setPsycologist}
                >
                </Psycologist>)
            }
            </div>
            {psycologist && <BookingModal psycologist={psycologist}></BookingModal>}
            <hr />
        </div>
    );
};

export default Psychologists;