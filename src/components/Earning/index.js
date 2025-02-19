import Image from 'next/image';
import React from 'react';
import phoneImg from '../../assets/phone.webp';

const Earning = () => {
    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-10">
            {/* Image Section */}
            <div className="flex-1 flex justify-center">
                <Image
                    alt="phone"
                    src={phoneImg}
                    width={350}
                    height={350}
                    priority
                    className="  md:max-w-[450px] h-auto"
                />
            </div>

            {/* Text Section */}
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
                    Earn investments while you shop
                </h1>
                <p className="text-base md:text-lg text-gray-600 mt-3 max-w-lg">
                    Earn bonus investments by shopping at thousands of top brands – including ones you likely shop at anyway!
                </p>
                <button className="mt-5 bg-green-500 hover:bg-green-600 text-white font-medium text-base md:text-lg py-3 px-6 rounded-full shadow-md">
                    Get started
                </button>
            </div>
        </div>
    );
};

export default Earning;
