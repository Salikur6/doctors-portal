import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h4 className='text-xl text-secondary text-center font-bold mb-24'>Available Appointments on {format(date, 'PP')}</h4>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-36'>
                {
                    services.map(service => <Service key={service._id} service={service} date={date}></Service>)
                }
            </div>

        </div>
    );
};

export default AvailableAppointment;