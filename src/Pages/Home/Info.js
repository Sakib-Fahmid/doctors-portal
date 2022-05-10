import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    const carInfoData = [
        {
            cardTitle: "Opening Hours",
            cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            img: clock,
            bgColor: 'primary'
        },
        {
            cardTitle: "Locate Use At",
            cardText: "Dhaka-1230, Bangladesh.",
            img: marker,
            bgColor: 'accent'
        },
        {
            cardTitle: "Contact Us Now",
            cardText: "019-12-9482-12",
            img: phone,
            bgColor: 'primary'
        }
    ];
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                carInfoData.map(data => <InfoCard data={data}></InfoCard>)
            }
        </div>
    );
};

export default Info;