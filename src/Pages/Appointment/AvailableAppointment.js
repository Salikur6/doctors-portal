import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([]);

    const formattedDate = format(date || new Date(), 'PP')
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [])

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h4 className='text-xl text-secondary text-center font-bold mb-24'>Available Appointments on {format(date || new Date(), 'PP')}</h4>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-36'>
                {
                    services?.map(service => <Service key={service._id} service={service} date={date} refetch={refetch}></Service>)
                }
            </div>

        </div>
    );
};

export default AvailableAppointment;