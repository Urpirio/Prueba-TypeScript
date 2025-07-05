import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";

export default function SectionExplore() {
  return (
<section className="flex h-[90vh] p-5">
    <div className="w-full  flex relative " >
        <div className="w-full">
            <img className="w-full h-full rounded-4xl" src="https://cdn.pixabay.com/photo/2020/06/21/09/46/rainbow-5324147_1280.jpg" alt="" />
        </div>
        <div className="absolute flex flex-col w-full  h-full justify-between items-center px-5 md:px-20 pt-20 pb-10">
            <div className="flex flex-col w-full flex-grow gap-5 md:gap-20">
                <div className="text-white flex flex-col gap-5">
                    <h1 className="text-5xl md:text-8xl font-semibold">Explore the sights  of the Azores</h1>
                    <h2 className="text-2xl md:text-2xl">A place where nature and adventure unite</h2>
                </div>
                <button className="border border-white bg-white w-50 py-4 rounded-4xl">Book now</button>

            </div>
            <div className="flex items-start flex-wrap-reverse w-full flex-grow justify-between ">
                <div className="flex gap-5 items-center  ">
                    <button name="Back" className="backdrop-blur-xs border border-white shadow-2xs p-2 rounded-full">
                        <IoIosArrowRoundBack className=" text-3xl text-white"/>
                    </button>
                    <button name="ForWard" className=" p-2 border-white bg-white rounded-full">
                        <IoIosArrowRoundForward  className=" text-3xl"/>
                    </button>
                </div>
                <div className="flex flex-col items-center  ">
                    <span className="text-xl text-white/60">Scroll down</span>
                    <button name="Down" className="w-30 backdrop-blur-xs bg-white/10 flex justify-center p-2 rounded-4xl">
                        <IoIosArrowRoundDown className="text-4xl text-white"/>
                    </button>
                </div>
            </div>
        </div>
    </div>

</section>
  )
}
