import { SiGoogledocs } from "react-icons/si";

export default function Timeline(){
    const icons = [
        { icon: <SiGoogledocs />, title: 'docs' },
        { icon: <SiGoogledocs />, title: 'docs' },
        { icon: <SiGoogledocs />, title: 'docs' },
        { icon: <SiGoogledocs />, title: 'docs' }

    ];
    return(
        <div className="flex flex-col justify-center items-center  pt-24 pb-24 font-bold bg-[url('/images/landing-page/timeline/1.png')] ,bg-[url('/images/landing-page/timeline/2.png')] bg-center bg-no-repeat">
            <div className="flex  lg:pb-12 w-full justify-center items-center  space-x-12 text-3xl ">
{icons.map((icon, index) => (
    <h1 key={index} className={`flex flex-col ${index > 0 ? 'hidden md:flex' : 'flex'} text-[#7B73AE] justify-center items-center`}>
        {icon.icon}
        {icon.title}
    </h1>
))}

                <h1 className="flex flex-col justify-center items-center "><SiGoogledocs/>Docs</h1>

                {icons.map((icon, index) => (
    <h1 key={index} className={`flex flex-col ${index > 0 ? 'hidden md:flex' : 'flex'} text-[#7B73AE] justify-center items-center`}>
        {icon.icon}
        {icon.title}
    </h1>
))}
                </div>

                <div class="flex justify-center items-center w-100% pt-12">
  <div class="relative w-screen ">
    <img src="/images/landing-page/timeline/photos2.svg" class="absolute inset-0 w-screen h-full " alt="First Image"/>
    <img src="/images/landing-page/timeline/photo.svg" class="relative right-100% z-10 w-9/4" alt="Second Image"/>
  </div>
</div>
                </div>

    )
}