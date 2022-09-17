import React from 'react';

const BookingModal = ({ psycologist }) => {
    const { name, img, education, experience, speciality } = psycologist;
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 class="text-3xl font-bold text-blue-700">Congratulation For Booking me !</h2>
                    <figure><img src={img} alt="Shoes" /></figure>
                    <h2 class="text-2xl font-bold">Booking For : {name}</h2>
                    <h2 class="text-xl font-semibold">Education : {education}</h2>
                    <h2 class="text-xl font-semibold">Experience : {experience}</h2>
                    <h2 class="text-xl font-semibold">Speciality : {speciality}</h2>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">Got It !</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;