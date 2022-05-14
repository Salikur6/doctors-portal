import React from 'react';
import TopBanner from './TopBanner/TopBanner';
import Info from './Info/Info';
import Services from './Services/Services';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Testimonial from './Testimonial/Testimonial';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <div></div>
            <Info></Info>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;