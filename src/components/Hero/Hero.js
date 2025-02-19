"use client";
import Image from "next/image";
import heroImg from "../../../public/heroImg.svg"

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-between">
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Acorns helps you <br /> save & invest
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Invest spare change, bank smarter, add Bits of Bitcoin to your ETF portfolio, and more. 
            Signing up takes minutes!
          </p>
          <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition">
            Get started
          </button>
        </div>

        
        <div className="relative mt-12 md:mt-0 flex justify-center">
        
          <div className="absolute -left-12 -bottom-6 w-40 h-28 bg-green-400 rounded-lg shadow-lg rotate-12 hidden md:block"></div>
          
         
          <div className="absolute -top-10 left-10 w-10 h-10 bg-green-400 rounded-full hidden md:block"></div>
          <div className="absolute -top-6 right-6 w-8 h-8 bg-black rounded-full hidden md:block"></div>

          
          <Image 
            src={heroImg} 
            alt="Acorns App" 
            width={400} 
            height={400} 
            className=" mt-4 me-[32px] md:ms-1 "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
