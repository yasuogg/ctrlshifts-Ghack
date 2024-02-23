'use client'
import Link from "next/link";
import Dropdown from "../dropdown";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";
export default function Header(){

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

      const Product = [
        {name:'Product' , url:'#'},
        { name:'Product', url:'#'},
        { name:'Product', url:'#'}
      ];
      const Solutions = [
        {name:'Solutions' , url:'#'},
        { name:'Solutions', url:'#'},
        { name:'Solutions', url:'#'}
      ];
      const Learn = [
        {name:'Learn' , url:'#'},
        { name:'Learn', url:'#'},
        { name:'Learn', url:'#'}
      ];
      
    return(
        <nav>
       <div className="flex justify-evenly items-center pt-8">
       <h1 className="font-bold text-2xl lg:text-4xl">CollaboraPro</h1>
<div>
    <div className="hidden md:block">
       <ul className="flex space-x-3 lg:space-x-7 font-  justify-center items-center">
       <li><Dropdown options={Product}/></li>
       <li><Dropdown options={Solutions}/></li>
       <li><Dropdown options={Learn}/></li>
        <li><Link href='#' className="hover:text-[#C637A0] duration-300">Pricing</Link></li>
        <li><Link href='#' className="hover:text-[#C637A0] duration-300 " >Enterprise</Link></li>
       </ul>
       </div>
       </div>
       <div className="flex space-x-4 text-white">
        <button className="bg-[#C637A0] py-2 px-3 rounded-lg" ><Link href='signup'>Sign Up</Link></button>
        <button className="bg-[#ACACAC] hidden md:block py-2 px-3 rounded-lg	"><Link href='login'>Log in</Link></button>

       </div>

       <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} ></div>
    <div>
    <button onClick={toggleMobileMenu} data-collapse-toggle="navbar-multi-level" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-[#C637A0] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#C637A0] " aria-controls="navbar-multi-level" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="pr-1 w-10 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    </div>
       </div>

       {/* Mobile menu*/}
<div className={`lg:hidden  fixed overscroll-none overflow-hidden transition-transform transform ${isMobileMenuOpen ? ' translate-x-0 ' : '-translate-x-full'} `} 
style={{ zIndex: 2, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
<div className="   bg-white text-black z-16 w-[80%] h-screen top-0 left-0  sm-hidden    ">
  <div className="flex flex-row items-center justify-evenly w-full pb-8 pt-2  ">
  <h1 className="flex justify-end font-bold  text-4xl pt-6 lg:text-4xl">CollaboraPro</h1> 
  <button className=" flex text-[30px] text-black pt-6 " onClick={toggleMobileMenu} ><IoMdClose/></button>
</div>
  <div className="flex flex-col   text-[25px]   ">
    <ul className="flex flex-col pl-8  space-y-12 lg:space-x-7   ">
       <li><Dropdown options={Product}/></li>
       <li><Dropdown options={Solutions}/></li>
       <li><Dropdown options={Learn}/></li>
        <li><Link href='#' className="hover:text-[#C637A0] duration-300">Pricing</Link></li>
        <li><Link href='#' className="hover:text-[#C637A0] duration-300 " >Enterprise</Link></li>
       </ul>
       <div className=" pt-8 flex flex-col justify-center  space-y-4 text-white">
        <button className="bg-[#C637A0] py-3 px-16 rounded-lg">Sign Up</button>
        <button className="bg-[#ACACAC] py-3 px-16 rounded-lg">Log in</button>

       </div>
  </div>

</div>
</div>
</nav>
    )
}
