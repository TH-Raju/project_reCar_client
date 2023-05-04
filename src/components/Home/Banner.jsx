import React from 'react';
import { Link } from 'react-router-dom';
import bgCar from '../../img/bgCar.png'
import car from '../../img/car.jpg'

const Banner = () => {
    return (
        // <div className='h-screen animate-slide '
        //     style={{
        //         background: `no-repeat  url(${car})`,
        //     }}>
        //     <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        //         <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-white'>
        //             Sell and Buy
        //         </h1>
        //         <p className='md:text-2xl text-xl font-bold text-gray-300'>Sell and Buy Your Product from online. Sell Your Used Product. and Buy Other Used Product Choose Best Product from online. </p>
        //         <Link to='/products'> <button className=' w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white bg-primary'>Get Started</button></Link>
        //     </div>
        // </div>
        <div className=" relative w-full  bg-gradient-to-t from-gray-100 from-5% to-gray-700 to-90%">
            <div className="hero min-h-screen min-w-full mix-blend-overlay" style={{ backgroundImage: `url(${car})` }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content  text-center ">
                    <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-white'>
                            Sell and Buy
                        </h1>
                        <p className='md:text-2xl text-xl font-bold text-gray-100'>Sell and Buy Your Product from online. Sell Your Used Product. and Buy Other Used Product Choose Best Product from online. </p>
                        <Link to='/products'> <button className=' w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white bg-primary'>Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;