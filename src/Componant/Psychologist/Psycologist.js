import React from 'react';
// import './Psycologist.css'
const Psycologist = ({ psycologist, setPsycologist }) => {
    const { name, img, education, experience, speciality } = psycologist;
    return (
        <div className='mt-20'>
            < div class="card w-96 bg-golden-100 shadow-xl" >
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="text-3xl font-bold">{name}</h2>
                    <h2 class="text-xl font-semibold">Education : {education}</h2>
                    <h2 class="text-xl font-semibold">Experience : {experience}</h2>
                    <h2 class="text-xl font-semibold">Speciality : {speciality}</h2>
                    <div class="card-actions justify-end">
                        <label for="my-modal-6"
                            onClick={() => setPsycologist(psycologist)}
                            class="modal-button btn btn-primary w-full">Book Now</label>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Psycologist;