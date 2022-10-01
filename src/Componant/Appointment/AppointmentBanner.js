import 'react-day-picker/dist/style.css';
import './Appointment.css'
import Chair from "../Images/chair.png"
import bgChair from "../Images/Bg-Chair.png"
import React from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div>
            <div style={
                {
                    background: `url(${bgChair})`
                }
            } class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={Chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
                    <div>
                        <div className='hero container max-w-screen-lg mx-auto text-center pb-10 mt-20 mb-5'>
                            <DayPicker
                                mode="single"
                                selected={date}
                                onSelect={setDate} />
                        </div>
                        <span className='text-red-500 text-4xl font-bold'><b>You have selected : {format(date, 'PP')}</b></span>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default AppointmentBanner;