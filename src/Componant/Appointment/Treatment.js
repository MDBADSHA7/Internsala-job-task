import React from 'react';
const Treatment = ({ treatment, setBooking }) => {
    const { name, slots } = treatment;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            :
                            <span className='text text-red-700'>Try another day</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <div class="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setBooking(treatment)}
                        for="booking-modal" class="btn btn-primary text-white uppercase">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Treatment;