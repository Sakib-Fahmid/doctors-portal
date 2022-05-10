import React from 'react';
import Banner from './Banner';
import Info from './Info';
import chair from '../../assets/images/chair.png';
import Services from './Services';
import Appointment from './Appointment';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-2'>
            <div className='relative'>
                <img className="absolute inset-0 w-full h-full object-cover" src={chair} />
                <div className='absolute inset-0 bg-gray-100 opacity-80'></div>
                <Banner />
                <Info />
            </div>
            <Services />
            <Appointment />
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;