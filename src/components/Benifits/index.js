import React from 'react'
import { AnimatedListDemo } from '../Animated-List'

const Benifits = () => {
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

        {/* Right Side - Image & Floating Elements */}
        <div className="relative mt-12 md:mt-0 flex justify-center">
          <AnimatedListDemo/>
          
        </div>
      </div>
    </section>
  )
}

export default Benifits