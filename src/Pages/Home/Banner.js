import React from 'react';
import chair from '../../assets/images/chair.png';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 relative">
            <img src={chair} className="absolute inset-0 w-full h-full object-cover" />
            <div className='absolute inset-0 bg-gray-100 opacity-75'></div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='w-1/2' src={chair} />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;