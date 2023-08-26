import React from 'react';

const LatestCar = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date();
    let day = d.getDate()
    let year = d.getFullYear()
    let month = months[d.getMonth()]
    return (
        <div className='my-40'>
            <div className='my-20'>
                <h1 className='text-5xl font-bold text-center'>Latest Car Advice</h1>
                <p className='text-center text-2xl my-4'>Here are some of the featured cars in different categories</p>

            </div>
            <div className='flex flex-wrap gap-11 justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={require('../../img/car1.jpg')} alt="Shoes" className='rounded-md' /></figure>
                    <div className="card-body -mt-5 -ml-5 text-xl font-bold">
                        <p>The Car Enthusiast: Exploring the World of Cars and Driving.</p>

                        <div className="flex space-x-4 my-5">
                            <div>
                                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full " />
                            </div>
                            <div>
                                <h4 className="font-bold">Leroy Jenkins <div className="badge badge-secondary">NEW</div></h4>
                                <span className="text-xs ">Posted on - {day} {month}, {year}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={require('../../img/car2.jpg')} alt="Shoes" className='rounded-md' /></figure>
                    <div className="card-body -mt-5 -ml-5 text-xl font-bold">
                        <p>“The best car safety device is a rear-view mirror with a cop in it.” – Dudley Moore</p>

                        <div className="flex space-x-4 my-5">
                            <div>
                                <img src="https://source.unsplash.com/100x100/" alt="" className="object-cover w-12 h-12 rounded-full " />
                            </div>
                            <div>
                                <h4 className="font-bold">Dudley Moore <div className="badge badge-secondary">NEW</div></h4>
                                <span className="text-xs ">Posted on - 21 June, 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={require('../../img/car3.jpg')} alt="Shoes" className='rounded-md' /></figure>
                    <div className="card-body -mt-5 -ml-5 text-xl font-bold">
                        <p>“Speed has never killed anyone, suddenly becoming stationary… that’s what gets you.” – Jeremy Clarkson</p>

                        <div className="flex space-x-4 my-5">
                            <div>
                                <img src="https://source.unsplash.com/100x300/" alt="" className="object-cover w-12 h-12 rounded-full " />
                            </div>
                            <div>
                                <h4 className="font-bold">Jeremy Clarkson <div className="badge badge-secondary">NEW</div></h4>
                                <span className="text-xs ">Posted on - {day - 4} {month}, {year - 1}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={require('../../img/car4.jpg')} alt="Shoes" className='rounded-md' /></figure>
                    <div className="card-body -mt-5 -ml-5 text-xl font-bold">
                        <p>“I couldn’t find the sports car of my dreams, so I built it myself.” – Ferdinand Porsche</p>

                        <div className="flex space-x-4 my-5">
                            <div>
                                <img src="https://source.unsplash.com/100x200/?portrait" alt="" className="object-cover w-12 h-12 rounded-full " />
                            </div>
                            <div>
                                <h4 className="font-bold">Ferdinand Porsche <div className="badge badge-secondary">NEW</div></h4>
                                <span className="text-xs ">Posted on - {day - 10} August, 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={require('../../img/car6.jpg')} alt="Shoes" className='rounded-md' /></figure>
                    <div className="card-body -mt-5 -ml-5 text-xl font-bold">
                        <p>“I don’t sell cars; I sell engines. The cars I throw in for free since something has to hold the engines in.” – Enzo Ferrari</p>

                        <div className="flex space-x-4 my-5">
                            <div>
                                <img src="https://source.unsplash.com/300x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full " />
                            </div>
                            <div>
                                <h4 className="font-bold">Enzo Ferrari <div className="badge badge-secondary">NEW</div></h4>
                                <span className="text-xs ">Posted on - {day - 2} April, 2024</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default LatestCar;