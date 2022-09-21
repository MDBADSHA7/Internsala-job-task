import React from 'react';
import quote from '../../Images/quote.svg'
import people1 from '../../Images/people-1.jpg'
import people2 from '../../Images/People-2.jpg'
import people3 from '../../Images/people-3.jpg'
import Testimonial from './Testimonial';
const Testimonials = () => {
    const testimonials = [
        {
            _id: 1,
            name: 'Winson Herry',
            location: 'California',
            review: '',
            Image: people1,
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: '',
            location: 'California',
            Image: people2,
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: '',
            location: 'California',
            Image: people3,
        }
    ]
    return (
        <section className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-xl text-primary font-bold'>Testimonials</h2>
                    <h2 className='text-3xl'>What our patients say ?</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    testimonials.map(testimonial => <Testimonial
                        key={testimonial._id}
                        testimonial={testimonial}
                    ></Testimonial>)
                }
            </div>
        </section >
    );
};

export default Testimonials;