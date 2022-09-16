import React from 'react';
// import './Psycologist.css'
const Psycologist = ({ psycologist }) => {
    const { name, img, education, experience, speciality } = psycologist;
    return (
        <div className='mt-20'>
            < div class="card w-96 bg-golden-100 shadow-xl" >
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Name:{name}</h2>
                    <h2 class="card-title">Education:{education}</h2>
                    <h2 class="card-title">Experience:{experience}</h2>
                    <h2 class="card-title">Speciality:{speciality}</h2>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary w-full">Book Now</button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Psycologist;