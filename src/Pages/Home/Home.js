import React from 'react';
import TopBanner from './TopBanner/TopBanner';
import Info from './Info/Info';
import Services from './Services/Services';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Testimonial from './Testimonial/Testimonial';
const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <div></div>
            <Info></Info>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;