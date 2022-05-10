import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const testimonialData = [
        {
            _id: 1,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quia iusto sunt accusantium doloribus aperiam.',
            thumbnail: people1,
            userName: 'Fahmid',
            location: 'Uttara'
        },
        {
            _id: 2,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quia iusto sunt accusantium doloribus aperiam.',
            thumbnail: people2,
            userName: 'Fahmid2',
            location: 'Uttara2'
        },
        {
            _id: 3,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quia iusto sunt accusantium doloribus aperiam.',
            thumbnail: people3,
            userName: 'Fahmid3',
            location: 'Uttara3'
        },
    ];
    return (
        <div className='my-12'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h3 className='text-3xl'>What our Patiens Say</h3>
                </div>
                <div className='flex flex-row-reverse'>
                    <img className='w-1/2' src={quote} alt="" />
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-12'>
                    {
                        testimonialData.map(testimonial => <Testimonial key={testimonial._id} testimonial={testimonial}></Testimonial>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonials;