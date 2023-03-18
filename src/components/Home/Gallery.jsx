import React from 'react';
import { Link } from 'react-router-dom';
import car from '../../img/g.jpg';

const Gallery = () => {
    return (
        <div className="hero bg-fixed my-20 py-24" style={{ backgroundImage: `url(${car})` }}>
            <div className=" bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md lg:py-24">
                    <h1 className="mb-5 text-5xl font-bold">Best Cars on Online</h1>
                    <Link to='/products'> <button className=' w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white bg-primary'>Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Gallery;