import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import treatment from '../../../assets/images/treatment.png';

const Services = () => {
    return (
        <div className='container mx-auto my-12'>
            <div className='text-center'>
                <h3 className='uppercase text-xl text-primary font-bold'>Our services</h3>
                <h2 className='text-4xl font-semibold'>Services We Provide</h2>
            </div>


            {/* Services Tooth Card */}
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20'>
                <ServiceCard img={fluoride} title='Flouride Treatment' description='Fluoride treatments are typically professional treatments containing a high concentration of fluoride.'></ServiceCard>

                <ServiceCard img={cavity} title='Cavity Filling' description='There is a wide variety of materials used for filling cavities and they vary in strength and color. The two most common types are amalgam and composite.'></ServiceCard>

                <ServiceCard img={whitening} title='Teeth Whitening' description='With professional Teeth Whitening treatment, you can enjoy the boost in confidence of a bright, white smile.'></ServiceCard>
            </div>



            {/* Services Hero Card */}

            <div className=''>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='Dental Care treatment img' />
                        <div>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;