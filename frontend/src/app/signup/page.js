import Header from "@/components/signup/navbar";
import Link from "next/link";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";

export default function sigup (){
    return(
<>
<Header/>
<div className="bg-cover absolute bottom-0 left-0 w-full text-center md:pb-[50%] lg:pb-[15%]  bg-no-repeat" style={{backgroundImage: "url('/images/login/group1.svg')"}}>
<div className=" flex flex-col justify-center items-center text-black  ">
<div className="flex flex-col  shadow-2xl px-12 border-separate   py-10  mb-12 lg:mb-0  rounded-lg bg-white">
<h1 className="text-center font-bold text-5xl pb-6">Let's go!</h1>

<label for="input-group-1" class=" flex  mb-2 text-sm font-medium ">Full Name</label>
<div class="relative mb-6 ">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
   <FaRegUserCircle/>
  </div>
  <input type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 px-24 p-2.5  " placeholder="Username"/>
</div>

<label for="input-group-1" class="flex mb-2 text-sm font-medium ">Your Email</label>
<div class="relative mb-6">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
    </svg>
  </div>
  <input type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  " placeholder="Email"/>
</div>

<label for="website-admin" class="flex mb-2 text-sm font-medium text-gray-900">Password</label>
<div class="flex">
  <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md ">
  <RiLockPasswordFill/>
  </span>
  <input type="password" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  " placeholder="Password"/>
</div>

<button className="bg-[#C637A0] duration-200 hover:bg-[#bc088c] text-white mt-6 py-2 px-3 rounded-lg	 ">Sign up</button>


</div>

</div>
</div>

</>
    )
}