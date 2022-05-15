import React, { useState } from 'react';
import BookingModal from './BookingModal';

const Service = ({ service, date }) => {
    const { name, slots } = service;
    const [treatment, setTreatment] = useState(null);

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mb-9">
            <div className="card-body text-center">
                <h2 className="card-title text-secondary justify-center mb-2.5 font-bold">{name}</h2>
                <p className='mb-3'>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500 font-bold'>Try another Date.</span>}</p>
                <p className='mb-3.5'>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} available</p>
                <div className="card-actions justify-center">


                    <label htmlFor="booking-modal" disabled={slots.length === 0} className="btn btn-secondary bg-gradient-to-r from-secondary to-primary text-white uppercase" onClick={() => setTreatment(service)}>Book Appointment</label>

                </div>
                {treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} date={date}></BookingModal>}
            </div>
        </div>
    );
};

export default Service;