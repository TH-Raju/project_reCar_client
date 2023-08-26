import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Review = () => {


    return (
        <div className='mb-60 '>
            <h2 className="text-4xl text-center font-bold my-4 mb-16">Client's Review</h2>
            <AwesomeSlider className='h-80'>

                <div className=" bg-white flex shadow-slate-500 shadow-lg border border-x-slate-600 border-t-slate-600 flex-col lg:w-2/4 md:w-5/6  p-6 mx-auto divide-y rounded-md divide-gray-700 text-black">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full " />
                            </div>
                            <div>
                                <h4 className="font-bold">Leroy Jenkins</h4>
                                <span className="text-xs ">2 days ago</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                            </svg>
                            <span className="text-xl font-bold">4.5</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm ">
                        <p>I'll use this site from last 2 years. It's an amazing site for Car resale Last year I sell my own old car easily. And Pyament was so clear and easily.</p>
                        <p>This year I bought a new Car from this site. It's really help me to buy a car in online reslae handing is best for old car. Their feature are best. and client also good heart person. I recommand you to deal with Resale Handing.</p>
                    </div>
                </div>

                <div className="bg-white flex flex-col  shadow-slate-500 shadow-lg border border-x-slate-600 border-t-slate-600 my-8 lg:w-2/4 md:w-5/6  p-6 mx-auto divide-y rounded-md divide-gray-700 text-black">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src={require('../../img/student-1.png')} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-600" />
                            </div>
                            <div>
                                <h4 className="font-bold">John Smith</h4>
                                <span className="text-xs text-black">3 days ago</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                            </svg>
                            <span className="text-xl font-bold">5.0</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm text-black">
                        <p>It's an very amazing marketplace that I have ever seen. You can buy and sell your won product online easily with the help of this amazing site.</p>
                    </div>
                </div>

                <div className="bg-white flex flex-col  shadow-slate-500 shadow-lg border border-x-slate-600 border-t-slate-600 my-8 lg:w-2/4 md:w-5/6  p-6 mx-auto divide-y rounded-md divide-gray-700 text-black">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src={require('../../img/student-3.png')} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-600" />
                            </div>
                            <div>
                                <h4 className="font-bold">Leo Karnel</h4>
                                <span className="text-xs text-black">5 days ago</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                            </svg>
                            <span className="text-xl font-bold">4.5</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm text-black">
                        <p>I'll Sell my product on this site help It's an amazing experience. This site is quite Helpful for me. I can sell my product easily. and buyer are awsome. I'll find payment easily.</p>
                        <p>I recommand you to buy and sell product here and connect with people to sell or buy prodcuts from online. This site is very helpful for me. Good Work Resale Handing. Keep up the good work.</p>
                    </div>
                </div>


            </AwesomeSlider>
        </div>
    );
};

export default Review;