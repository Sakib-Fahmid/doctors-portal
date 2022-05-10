import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const ServiceCards = () => {
    const cardServiceData = [
        {
            id: 1,
            img: fluoride,
            cardTitle: 'Fluoride Treatment',
            cardText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, cupiditate!'
        },
        {
            id: 2,
            img: cavity,
            cardTitle: 'Cavity Filling',
            cardText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, cupiditate!'
        },
        {
            id: 3,
            img: whitening,
            cardTitle: 'Teeth Whitening',
            cardText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, cupiditate!'
        }
    ];
    return (
        <div className='flex justify-center'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                {
                    cardServiceData.map(data => <ServiceCard key={data.id} data={data}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default ServiceCards;