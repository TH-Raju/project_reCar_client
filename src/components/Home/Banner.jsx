import React from 'react';
import { Link } from 'react-router-dom';
import bgCar from '../../img/bgCar.png'

const Banner = () => {
    return (
        <div className='h-screen'
            style={{
                background: `no-repeat bottom url(${bgCar})`
            }}>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    Sell and Buy
                </h1>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Sell and Buy Your Product from online. Sell Your Used Product. and Buy Other Used Product Choose Best Product from online. </p>
                <Link to='/products'> <button className='bg-cyan-700 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button></Link>

            </div>
        </div>
    );
};

export default Banner;