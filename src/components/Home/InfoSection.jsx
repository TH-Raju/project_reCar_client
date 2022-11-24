import React from 'react';
import shop from '../../img/car.png';
import news from '../../img/news.png';
import service from '../../img/service.png';
import sell from '../../img/sell.png';

const InfoSection = () => {
    return (
        <div className='lg:w-4/5 lg:mx-auto h-screen'>
            <h2 className='text-center text-3xl font-bold'>About Resale Handing</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:mx-12 my-16'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={shop} className='h-16 w-72 lg:w-36 lg:h-20 -mt-28' alt="shop" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shop</h2>
                        <p>Find cars for sale, local dealers, and advice. Also, our price-badging and price-drop notifications keep you informed of potential deals.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Find Cars</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={news} className='h-16 w-72 lg:w-36 lg:h-20 -mt-28' alt="news" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">News</h2>
                        <p>Our very own resale handing experts offer unbiased coverage of today's automotive landscape. Yes, there will be dad jokes.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Find Cars</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={sell} className='h-16 w-72 lg:w-36 lg:h-20 -mt-28' alt="sell" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sell</h2>
                        <p>Check out our free, secure methods for selling your car. You can either sell directly to a private-party shopper or get an Instant Offer from a dealership. Choose the option that’s right for you!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Find Cars</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={service} className='h-16 w-72 lg:w-36 lg:h-20 -mt-28' alt="service" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Serice and Repair</h2>
                        <p>You can find Service and Repair on your buying product if your seller want to give it you.if service and Repair available on those product you can find it from those product owner</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Find Cars</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InfoSection;