import React from 'react';

const Choose = () => {
    return (
        <div className='mb-36 md:w-5/6 mx-auto'>
            <h2 className="text-5xl text-center font-bold my-4 mb-16">Why choose us?</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 bg-gray-300 p-10 rounded-xl'>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={require('../../img/certify.png')} alt="brands" className="rounded-xl w-12 h-12" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title  text-2xl font-bold">Wide range of brands</h2>
                        <p>We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>

                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={require('../../img/trust.png')} alt="trusted" className="rounded-xl w-12 h-12" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title  text-2xl font-bold">Trusted by our clients</h2>
                        <p>We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>

                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={require('../../img/money.png')} alt="money" className="rounded-xl w-12 h-12" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title  text-2xl font-bold">Fast & easy financing</h2>
                        <p>We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;