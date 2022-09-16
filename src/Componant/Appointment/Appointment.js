import 'react-day-picker/dist/style.css';
import './Appointment.css'
import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <div className='hero container max-w-screen-lg mx-auto text-center pb-10 mt-20 mb-5'>
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate} />
            </div>
            <span className='text-red-500 text-4xl font-bold'><b>Today is : {format(date, 'PP')}</b></span>
        </div>
    );
};

export default Appointment;