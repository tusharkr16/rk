import React from 'react';
import { ShineBorder } from '../magicui/shine-border';
// import tableImg from "../../../public/table.svg"
import Image from 'next/image';


const Card = () => {
  const cards = [
    {
      title: "Expert team of innovators",
      description: "Our experienced team is driven by creativity, technical expertise, and a passion for excellence, ensuring top-tier frontend solutions for your business.",
      
      bgColor: "bg-[#e4ecf0]",
      textColor: "text-black"
    },
    {
      title: "Tailored solutions for your Ideas",
      description: "We deliver customized, high-performance frontend solutions that address your unique business challenges, enhancing productivity and user engagement.",
      
      bgColor: "bg-green-400",
      textColor: "text-white"
    },
    {
      title: "Commitment to quality",
      description: "Upholding the highest standards of precision, reliability, and innovation to deliver exceptional, customized frontend solutions that enhance user experience and business performance.",
      
      bgColor: "bg-[#e4ecf0]",
      textColor: "text-black"
    }
  ];

  return (
    <>
    <div className='text-center'>
      <p className='hidden  md:block text-green-500 text-2xl font-semibold font-redhat'>Features</p>
      <h1 className=' hidden md:block text-4xl font-redhat  text-bold py-2 font-black drop-shadow-lg'>Transforming Ideas Into Impactful User Experience</h1>
    </div>
    <div className="flex flex-col items-center justify-center md:flex-row gap-6 px-2 md:px-12 md:gap-x-9 py-10">
     
      {cards.map((card, index) => (
        <ShineBorder
          key={index}
          className={`relative p-6 rounded-lg shadow-lg ${card.bgColor}`}
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <div className="flex flex-col w-[200px] h-[300px] items-start text-start space-y-4 transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer ">
            {/* <Image src={card.image} alt={card.title} className="w-24 h-24" /> */}
            <h3 className={`text-xl font-bold ${card.textColor}`}>{card.title}</h3>
            <p className={`text-sm mt-4 ${card.textColor} opacity-80`}>{card.description}</p>
          </div>
        </ShineBorder>
      ))}
    </div>
    </>
  );
};

export default Card;