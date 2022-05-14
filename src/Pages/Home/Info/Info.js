import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard/InfoCard';

const info = () => {

    const gradientColor = `bg-gradient-to-r from-secondary to-primary`
    return (
        <section className='my-28'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto justify-center'>
                <InfoCard cardTitle='Opening Hours' description="Opening at 9:00 AM" img={clock} gradientColor={gradientColor}></InfoCard>
                <InfoCard cardTitle='Visit Our Location' description="Brooklyn, NY 10036, United States" img={marker}></InfoCard>
                <InfoCard cardTitle='Contact Us' description="+000 123 456789" img={phone} gradientColor={gradientColor}></InfoCard>
            </div>
        </section>
    );
};

export default info;