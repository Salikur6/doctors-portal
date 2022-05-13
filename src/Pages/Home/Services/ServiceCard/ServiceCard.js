import React from 'react';

const ServiceCard = ({ service }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={service?.img} alt="Album" className='mt-3' />

            </figure>
            <div className="card-body items-center">
                <h2 className="card-title font-bold">{service.name}</h2>
                <p className='text-center font-semibold mt-3'>{service.description}</p>

            </div>
        </div>
    );
};

export default ServiceCard;