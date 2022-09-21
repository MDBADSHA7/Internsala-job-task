import React from 'react';
import Chair from "../../Images/chair.png"
const PsycologistChair = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={Chair} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold">Welcome to our Website !!</h1>
                    <p class="text-2xl py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default PsycologistChair;