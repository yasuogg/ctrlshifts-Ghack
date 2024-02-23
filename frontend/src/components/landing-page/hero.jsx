'use client'
import { FaArrowRight } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';

export default function Hero (){
    return(
        <div className="flex flex-col pb-12 justify-center items-center mt-4 md:mt-[6%]  ">
            <div className=" flex flex-col w-[95%] pt-24 pb-24  justify-center items-center rounded-3xl bg-gradient-to-r from-[#BA7EEA] to-[#FFBBBB]">

            
<h1 className="text-[#C637A0] text-center md:w-[80%] lg:w-[55%] font-bold text-4xl md:text-6xl">Colaborate and build faster
together. </h1>
<h1 className="bg-gradient-to-r from-purple-500 to-pink-500  text-transparent bg-clip-text  text-center  font-bold text-6xl pt-6"> <TypeAnimation className="  bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-center"
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'BEST',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'FAST',
        1000,
      ]}
      wrapper="span"
      speed={10}
      repeat={Infinity}
    /></h1>
<h2 className="font-bold pt-6 text-center md:w-[60%] lg:w-[30%]">Create, share, and get feedback with collaborative boards for rapid development.</h2>
       <button className=" mt-6 bg-gradient-to-r from-[#F64886] to-[#F9E374] py-4 px-6 rounded-xl text-white text-xl md:text-2xl flex items-center justify-between text-shadow-xl  ">Get Started for FREE  <FaArrowRight className="ml-6"/></button>
       </div>
        </div>
    )
}