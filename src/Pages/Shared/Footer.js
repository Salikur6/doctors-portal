import React from 'react';
import { Link } from 'react-router-dom';
import footerBg from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <div style={{ background: `url(${footerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <footer className="footer p-10 container mx-auto" >
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='' className="link link-hover">Emergency Checkup</Link>
                    <Link to='' className="link link-hover">Monthly Checkup</Link>
                    <Link to='' className="link link-hover">Weekly Checkup</Link>
                    <Link to='' className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link to='' className="link link-hover">Fluoride Treatment</Link>
                    <Link to='' className="link link-hover">Cavity Filling</Link>
                    <Link to='' className="link link-hover">Teath Whitening</Link>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <Link to='' className="link link-hover">New York - 101010 Hudson</Link>
                </div>
            </footer>
            <footer className="px-10 py-4 text-center">


                <p className='font-bold'>Copyright {(new Date().getFullYear())} All Rights Reserved By <a className='text-green-600' href="https://github.com/Salikur6" target="blank">Salikur Islam</a></p>


            </footer>
        </div>
    );
};

export default Footer;