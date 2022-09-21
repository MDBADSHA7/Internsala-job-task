import React from 'react';

const Testimonial = ({ testimonial }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, autem dolores reprehenderit est dolorem veniam!</p>
                <div class="flex items-center">
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-4">
                            <img src={testimonial.Image} alt="" />
                        </div>

                    </div>
                    <div>
                        <h2 className='text-xl'>{testimonial.name}</h2>
                        <p>{testimonial.location}</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Testimonial;