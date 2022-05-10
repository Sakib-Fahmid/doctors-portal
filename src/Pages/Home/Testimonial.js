import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { thumbnail, location } = testimonial;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className='card-body items-center text-center'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod explicabo laboriosam assumenda nulla eius voluptatem delectus quo officiis est quisquam.</p>
            </div>
            <div className='flex items-center mb-4'>
                <figure className="px-10 pt-10 mt-[-40px]">
                    <img src={thumbnail} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="">
                    <h2 className="card-title">Winson Herry</h2>
                    <p>{location}</p>
                </div>
            </div>

        </div>
    );
};

export default Testimonial;