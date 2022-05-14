import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const Contact = () => {
    return (
        <div>
            <div className="hero" style={{ background: `url(${appointment})no-repeat` }}>
                <div className="hero-content flex-col my-16">
                    <div className="text-center lg:text-left">
                        <h1 className="text-xl font-bold text-primary text-center">Contact Us</h1>
                        <h2 className="py-6 text-4xl text-white">Stay connected with us</h2>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                        <div className="card-body">
                            <div className="form-control mb-5">
                                <input type="text" placeholder="Email Address" className="input input-bordered" />
                            </div>
                            <div className="form-control mb-5">

                                <input type="text" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <div className="form-control mb-5">
                                <textarea className='input input-bordered h-36' name="message" id="" cols="25" rows="10" placeholder='Your Message'></textarea>

                            </div>

                            <div className="mt-6 text-center">
                                <button className="btn bg-gradient-to-r from-secondary to-primary border-0 text-white">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;