import React from 'react';

const ServiceCard = ({ img, title, description }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={img} alt="Album" className='mt-3' />

            </figure>
            <div className="card-body items-center">
                <h2 className="card-title font-bold">{title}</h2>
                <p className='text-center font-semibold mt-3'>{description}</p>

            </div>
        </div>
    );
};

export default ServiceCard;