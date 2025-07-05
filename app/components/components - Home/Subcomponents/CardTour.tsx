import { DataCardsTour } from "~/Data/Data - CardTour";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function CardTour() {
  const Cards = DataCardsTour.map(Data =>{
    return (
    <article key={Data.key} className="w-80 shadow-2xs border border-gray-300 flex flex-col rounded-2xl">
        <div className="relative">
            <div className="absolute flex justify-end p-5 w-full">
                <div className="flex  rounded-2xl text-white gap-2 p-1 shadow-2xs backdrop-blur-2xl justify-between px-2 items-center ">
                    {Data.Start}.0
                    <FaStar className="text-xl"/>
                </div>
            </div>
            <img className="h-full rounded-2xl" src={Data.Img} alt={Data.Title} />
        </div>
        <div className="p-2 flex flex-col ">
           <div className=" flex  justify-between items-center">
            <div>
             <h2>{Data.Title}</h2>
             <span>{Data.Price}/prices</span>
           </div>
           <div>
            <button className="border bg-black text-white p-3 rounded-full">
                <FaArrowRight/> 
            </button>
           </div>
           </div>
        </div>
    </article>
  )
  })
  return(Cards)
}
