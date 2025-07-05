import { DataCard } from "~/Data/Data - Card";


export default function CardTopValues() {
    const Cards = DataCard.map(Data => {
        return(
            <article key={Data.key} className=" flex w-80 flex-col gap-2 items-center text-center">
                <div className="border border-gray-100 p-5 bg-gray-200 rounded-full">
                    {Data.Icon}
                </div>
                <h3 className="text-xl font-semibold">{Data.Title}</h3>
                <span className="text-md text-gray-900">{Data.Description}</span>
            </article>
        )
    });
    return(Cards)
}
