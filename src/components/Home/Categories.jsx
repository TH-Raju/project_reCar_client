import React from 'react';
import electric from '../../img/electric.avif';
import luxury from '../../img/luxary.avif';
import microbus from '../../img/microbus.avif';
const Categories = () => {
    return (
        <div className='lg:w-4/5 lg:mx-auto my-16'>
            <h3 className="text-4xl text-center font-bold ">Categories</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mx-12 mb-28 mt-16'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={electric} alt="electric" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Electric Car</h2>
                        <p>You can find Used Electric Car. with Document and few days used</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={luxury} alt="luxury" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Luxury Car</h2>
                        <p>You can find Used Luxury Car. with Document and few days used</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={microbus} alt="microbus" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">MicroBus Car</h2>
                        <p>You can find Used MicroBus Car. with Document and few days used</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;