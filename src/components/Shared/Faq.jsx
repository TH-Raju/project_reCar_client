import React from 'react';

const Faq = () => {
    return (
        <div className='lg:w-4/5 lg:mx-auto my-16'>
            <section className=" text-black">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 dark:text-gray-700">Here Are some FAQ those Question Frequently asked by our Client's.</p>
                    <div className="space-y-4 mb-16">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-black-700 text-2xl font-bold">Why ReCar</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-800 text-xl">ReCar is Resale Car Website. It's Basically use for Resale Car and Buying a Car also. People can easily Sell and Buy from Here. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-black-700 text-2xl font-bold">Is It Trusted?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-800 text-xl">Yes! We are working from last 6 year's. and We believed on our Service. You can Easily Pay and Sell your Car's from our side. We give the best Service. Or you can contact with Us!</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-black-700 text-2xl font-bold">How many days I can recieved delievery?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-800 text-xl">You'll received your product's on 3 to 5 working days. We will try to deliever As Fast As We Can.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;