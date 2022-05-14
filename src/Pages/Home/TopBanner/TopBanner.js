import React from 'react';
import chair1 from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';

const TopBanner = () => {
    return (
        <section className=''>
            <div className="hero min-h-screen md:px-12" style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse gap-5">
                    <div>
                        <img src={chair1} className="lg:w-full w-3/4 block mx-auto mt-6 rounded-lg shadow-2xl" alt='Top banner img' />
                    </div>
                    <div className='py-12'>
                        <h1 className="md:text-5xl text-4xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary uppercase text-white font-bold  bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopBanner;