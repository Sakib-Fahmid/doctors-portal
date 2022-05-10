import React from 'react';
import ServiceCards from './ServiceCards';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Services = () => {
    return (
        <div className='my-12'>
            <h1 className='font-bold text-primary text-center'>OUR SERVICES</h1>
            <h1 className='text-3xl text-center'>Services We Provide</h1>
            <ServiceCards></ServiceCards>
            <div className='flex justify-center py-5'>
                <div className="hero min-h-screen w-5/6">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl mx-12" />
                        <div>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <PrimaryButton></PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;