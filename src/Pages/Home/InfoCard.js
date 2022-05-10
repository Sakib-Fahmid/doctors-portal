import React from 'react';

const InfoCard = ({ data }) => {
    const { bgColor, cardText, cardTitle, img } = data;
    return (
        <div className={`card h-40 shadow-xl bg-${bgColor}`}>
            <div className="card-body">
                <div className='flex items-center'>
                    <div className='px-2 w-1/2'>
                        <figure><img src={img} alt="Movie" /></figure>
                    </div>
                    <div className='text-white px-2'>
                        <p className='font-semibold'>{cardTitle}</p>
                        <small>{cardText}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;