import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookingModal2 from './BookingModal2';
import Treatment from './Treatment';
const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [booking, setBooking] = useState(null);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='mt-2 d-flex align-middle justify-items-center'>
            <span className='text-blue-600 text-4xl font-bold'><b className='mb-2'>Available Appointment on : {format(date, 'PP')}</b></span>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 
            align-middle justify-items-center mb-5'>
                {
                    services.map(treatment => <Treatment
                        key={treatment._id}
                        setBooking={setBooking}
                        treatment={treatment}
                    ></Treatment>)
                }
            </div>
            {booking && <BookingModal2 booking={booking}></BookingModal2>}
            <hr />
        </div>
    );
};

export default AvailableAppointments;