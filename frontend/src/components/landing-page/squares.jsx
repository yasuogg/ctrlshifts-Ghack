import { BiSolidTachometer } from "react-icons/bi";
import { RiTeamFill } from "react-icons/ri";
import { FaUserCheck } from "react-icons/fa";

export default function Squares() {
  return (
    <div className="flex flex-col lg:flex-row lg:pt-12 justify-evenly items-center space-y-6 lg:space-y-0 lg:space-x-12  text-white ">
      <div className=" flex flex-col justify-center items-center rounded-2xl text-center py-32  md:w-[50%] lg:w-[20%] bg-gradient-to-r from-[#51B5FE] to-[#9D94FF]">
        <BiSolidTachometer className="text-6xl" />

        <h1 className="font-bold text-3xl">Integrate</h1>
        <p className="text-xl">
          The ability to quickly set up and customize workflows for just about
          anything.
        </p>
      </div>
      <div className=" flex flex-col rounded-2xl justify-center items-center text-center py-32  md:w-[50%] lg:w-[20%] bg-gradient-to-r from-[#51B5FE] to-[#9D94FF]">
        <RiTeamFill className="text-6xl" />

        <h1 className="font-bold text-3xl">Collaborate</h1>
        <p className="text-xl">
          Manage projects, organize tasks, and build team spirit—all in one
          place. for what
        </p>
      </div>

      <div className=" flex flex-col rounded-2xl justify-center items-center text-center py-32  md:w-[50%] lg:w-[20%] bg-gradient-to-r from-[#51B5FE] to-[#9D94FF]">
        <FaUserCheck className="text-6xl" />

        <h1 className="font-bold text-3xl">Succeed</h1>
        <p className="text-xl">
          Every single part of your task can be managed, tracked, and shared
          with teammates.
        </p>
      </div>
    </div>
  );
}
