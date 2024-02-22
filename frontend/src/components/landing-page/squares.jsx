import { BiSolidTachometer } from "react-icons/bi";

export default  function Squares (){
    return(
        
        <div className="flex flex-col lg:flex-row justify-evenly items-center space-y-6 lg:space-x-4  text-white ">
        <div className=" flex flex-col rounded-lg justify-center items-center text-center py-[8%] lg:py-[6%] md:w-[50%] lg:w-[20%] bg-gradient-to-r from-sky-500 to-indigo-500">
        <BiSolidTachometer className="text-6xl" />

            <h1 className="font-bold text-3xl">Integrate</h1>
            <p className="text-xl">The ability to quickly set up and customize workflows for just about anything.</p>
        </div>
        <div className=" flex flex-col rounded-lg justify-center items-center text-center py-[8%] lg:py-[6%] md:w-[50%] lg:w-[20%] bg-gradient-to-r from-sky-500 to-indigo-500">
        <BiSolidTachometer className="text-6xl" />

            <h1 className="font-bold text-3xl">Integrate</h1>
            <p className="text-xl">The ability to quickly set up and customize workflows for just about anything.</p>
        </div>

        <div className=" flex flex-col rounded-2xl justify-center items-center text-center py-[8%] lg:py-[6%] md:w-[50%] lg:w-[20%] bg-gradient-to-r from-sky-500 to-indigo-500">
        <BiSolidTachometer className="text-6xl" />

            <h1 className="font-bold text-3xl">Integrate</h1>
            <p className="text-xl">The ability to quickly set up and customize workflows for just about anything.</p>
        </div>

        </div>
       
    )
}