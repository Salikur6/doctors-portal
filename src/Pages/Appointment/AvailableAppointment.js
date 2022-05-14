import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointment = ({ date }) => {
    const [Services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h4 className='text-xl text-secondary text-center font-bold'>Available Appointments on {format(date || new Date(), 'PP')}</h4>
        </div>
    );
};

export default AvailableAppointment;