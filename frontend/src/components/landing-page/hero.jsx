import { FaArrowRight } from "react-icons/fa6";

export default function Hero (){
    return(
        <div className="flex flex-col justify-center items-center mt-16 md:mt-[10%]">
<h1 className="text-[#C637A0] text-center md:w-[80%] lg:w-[40%] font-bold text-4xl md:text-6xl">Colaborate and build faster
together.</h1>
<h2 className="font-bold pt-6 text-center md:w-[60%] lg:w-[30%]">Create, share, and get feedback with collaborative boards for rapid development.</h2>
       <button className=" mt-6 bg-gradient-to-r from-purple-500 to-pink-500 py-4 px-6 rounded-xl text-white text-2xl flex items-center justify-between  ">Get Started for FREE <FaArrowRight/></button>
        </div>
    )
}