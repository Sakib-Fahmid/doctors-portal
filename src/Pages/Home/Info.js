import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    const cardInfoData = [
        {
            id: 1,
            cardTitle: "Opening Hours",
            cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            img: clock,
            bgColor: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            cardTitle: "Locate Us At",
            cardText: "Dhaka-1230, Bangladesh.",
            img: marker,
            bgColor: 'bg-accent'
        },
        {
            id: 3,
            cardTitle: "Contact Us Now",
            cardText: "019-12-9482-12",
            img: phone,
            bgColor: 'bg-gradient-to-r from-primary to-secondary'
        }
    ];
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                cardInfoData.map(data => <InfoCard key={data.id} data={data}></InfoCard>)
            }
        </div>
    );
};

export default Info;