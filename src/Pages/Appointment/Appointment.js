import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentPageBanner from './AppointmentPageBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());


    return (
        <div className='container mx-auto'>
            <AppointmentPageBanner data={date} setDate={setDate} ></AppointmentPageBanner>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;