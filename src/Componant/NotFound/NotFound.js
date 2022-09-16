import React from 'react';
import NotFoundImg from '../Images/NotFound-2.jpg'
const NotFound = () => {
    return (
        <div>
            <section className="hero container max-w-screen-lg mx-auto text-center pb-10">
                <div className="">
                    <img src={NotFoundImg} alt="screenshot" width="887" height="550" />
                </div>
            </section>
        </div>
    );
};

export default NotFound;