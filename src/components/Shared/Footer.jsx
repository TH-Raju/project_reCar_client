import React from 'react';
const Footer = () => {
    const d = new Date();
    let year = d.getFullYear()

    return (
        <div
            // style={{
            //     background: `url(${footeri})`
            // }}
            className='px-8 mt-14 lg:w-4/5 lg:mx-auto my-16'>
            <footer className="footer lg:w-4/5 lg:mx-auto flex justify-between ">
                <div>
                    <span className="footer-title">Services</span>
                    <a href="/" className="link link-hover">Branding</a>
                    <a href="/" className="link link-hover">Design</a>
                    <a href="/" className="link link-hover">Marketing</a>
                    <a href="/" className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href="/" className="link link-hover">About us</a>
                    <a href="/" className="link link-hover">Contact</a>
                    <a href="/" className="link link-hover">Jobs</a>
                    <a href="/" className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href="/" className="link link-hover">Terms of use</a>
                    <a href="/" className="link link-hover">Privacy policy</a>
                    <a href="/" className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <div className='text-center py-6'><p>copyright © {year}. All right reserved by <a className='text-blue-800 underline' href="https://facebook.com/rjraju.r8/" target='__blank'>TH-Raju</a></p></div>
        </div>
    );
};

export default Footer;