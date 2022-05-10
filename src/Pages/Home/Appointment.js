import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Appointment = () => {
    return (
        <section style={{ 'background': `url(${appointment})` }} className='flex items-center justify-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-130px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h4 className='text-xl font-bold text-primary'>Appointment</h4>
                <h3 className='text-4xl text-white'>Make an Appointment Today</h3>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe omnis sint velit aliquam cum pariatur odio sit illum quisquam, architecto labore iusto vitae explicabo commodi suscipit ab eaque totam distinctio.</p>
                <PrimaryButton>Set Appointment</PrimaryButton>
            </div>
        </section>
    );
};

export default Appointment;