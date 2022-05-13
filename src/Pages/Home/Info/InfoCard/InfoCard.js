import React from 'react';

const InfoCard = ({ img, gradientColor, cardTitle, description }) => {
    return (
        <div className={`card lg:card-side shadow-xl bg-accent ${gradientColor}`}>
            <figure className='pl-5'>

                <img className='pt-4' src={img} alt="Album" />

            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default InfoCard;