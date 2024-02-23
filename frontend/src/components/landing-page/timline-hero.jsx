import { FaCalendarCheck } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { IoChatbox } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import { LiaChalkboardSolid } from "react-icons/lia";

export default function Timeline(){
    const icons = [
        { icon: <SiGoogledocs />, title: 'docs' },
        { icon: <IoChatbox />, title: 'chat' },
        { icon: <IoTime />, title: 'Time tracking' },
        { icon: <LiaChalkboardSolid />, title: 'Whiteboards' }

    ];
    return(
        <div className="flex flex-col justify-center items-center  h-full pb-[18%] lg:pb-[10%] pt-12   bg-[url('/images/landing-page/timeline/1.png')] ,bg-[url('/images/landing-page/timeline/2.png')] bg-center bg-no-repeat">
            <div className="flex  lg:pb-12 w-full justify-center items-center  space-x-12 text-2xl ">
{icons.map((icon, index) => (
    <h1 key={index} className={`flex flex-col ${index > 0 ? 'hidden md:flex' : 'flex' } md:${index > 1 ? 'hidden lg:flex' : 'flex' } text-[#7B73AE] justify-center items-center`}>
        {icon.icon}
        {icon.title}
    </h1>
))}

                <h1 className="flex flex-col text-3xl justify-center font-bold items-center "><FaCalendarCheck/>Projects</h1>

                {icons.map((icon, index) => (
    <h1 key={index} className={`flex flex-col ${index > 0 ? 'hidden md:flex' : 'flex' } md:${index > 1 ? 'hidden lg:flex' : 'flex' } text-[#7B73AE] justify-center items-center`}>
    {icon.icon}
        {icon.title}
    </h1>
))}
                </div>

                <div class="flex justify-center items-center w-screen pt-12">
  <div class="relative w-screen ">
  <img src="/images/landing-page/timeline/photos2.svg" class="absolute inset-0 w-screen h-full " alt="First Image"/>

    <img src="/images/landing-page/timeline/photo.svg" class="relative top-16 left-[50%]   z-10 w-[50%]" alt="Second Image"/>
  </div>
</div>
                </div>

    )
}