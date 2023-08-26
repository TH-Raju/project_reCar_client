import React from 'react';

const LatestCar = () => {
    return (
        <div>
            <h1>Latest Car Advice</h1>
            <p>Here are some of the featured cars in different categories</p>

            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={require('../../img/car.jpg')} alt="Shoes" className='rounded-md' /></figure>
                    <div className="card-body -mt-5 -ml-5 text-xl font-bold">
                        <p>The Car Enthusiast: Exploring the World of Cars and Driving.</p>

                        <div className="flex space-x-4 my-5">
                            <div>
                                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full " />
                            </div>
                            <div>
                                <h4 className="font-bold">Leroy Jenkins <div className="badge badge-secondary">NEW</div></h4>
                                <span className="text-xs ">Posted on - 03 April, 2023</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default LatestCar;