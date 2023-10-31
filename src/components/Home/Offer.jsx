import React from 'react';
import { Link } from 'react-router-dom';

const Offer = () => {
    return (
        <div className='lg:w-4/5 lg:mx-auto my-16'>
            <div className="p-6 py-12 bg-primary text-white">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                            <br className="sm:hidden" /> 50% Off
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>On shipping! Use code:</span>
                            <span className="font-bold text-lg">Happy ReCar</span>
                        </div>
                        <Link to={'/products'} rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;