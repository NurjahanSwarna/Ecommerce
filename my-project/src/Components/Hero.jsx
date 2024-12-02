import React from 'react'
import Heroimg from '../assets/hero-img.png'
import Heroo from '../assets/hero-2.png'
const Hero = () => {
  return (
    <>
    <section className='bg-[#F2F0FF] py-28 relative overflow-hidden z-20' >
        <img className='absolute -top-8 left-0 -z-10' src={Heroo} alt="" />
        <div className="container mx-auto">
        <div className="flex justify-between items-center">
                <div className="w-[60%] ">
                    <h4 className='font-lato font-bold text-[16px] text-praimary pb-3'>Best Furniture For Your Castle....</h4>
                    <h1 className='font-josef font-bold text-[56px] pb-3'>New Furniture Collection Trends in 2020</h1>
                    <p className='font-bold font-lato text-[16px] text-[#8A8FB9] pr-64 pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                    in phasellus non in justo.</p>
                    <button className='font-josef font-semibold bg-praimary text-white py-4 px-10'>Shop Now</button>
                </div>
                <div className="w-[40%] ">
                    <img  className='w-full' src={Heroimg} alt="hero" />
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Hero