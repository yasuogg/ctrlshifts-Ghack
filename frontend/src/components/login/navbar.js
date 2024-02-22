'use client'
import Link from "next/link";
export default function Header(){


      
    return(
        <nav>
       <div className="flex justify-between items-center pt-8 pl-6  lg:pl-24 pr-6">
       <h1 className="font-bold text-2xl lg:text-4xl">CollaboraPro</h1>
<div>
    <div className="hidden md:block">
       </div>
       </div>
       <div className="flex items-center space-x-4 text-white">
        <Link className="text-black  hover:text-[#C637A0] hidden md:block duration-300" href='signup' >Don't have an account ?</Link>
        <button className="bg-[#C637A0] py-2 px-3 rounded-lg	 " ><Link href='signup'>Sign Up</Link></button>

       </div>

</div>



</nav>
    )
}