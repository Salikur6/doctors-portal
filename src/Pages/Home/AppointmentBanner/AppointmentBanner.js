import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import bgAppointment from '../../../assets/images/appointment.png';

const AppointmentBanner = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${bgAppointment})`, marginBottom: '100px' }}>
            <div className="hero-content flex-col lg:flex-row p-5">
                <img src={doctor} className="w-1/2 rounded-lg mt-[-145px] mb-[-20px] hidden lg:block" alt='doctor img' />
                <div className='text-white py-8'>
                    <h4 className='text-xl font-bold text-primary mb-4'>Appointment</h4>
                    <h1 className="lg:text-4xl text-3xl font-bold">Make an appointment Today</h1>
                    <p className="py-6 text-justify">It's a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters as opposed to using content here, making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn bg-gradient-to-r from-secondary to-primary text-white border-0 font-bold">Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;