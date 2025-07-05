import CardTour from "../Subcomponents/CardTour";

export default function SectionChooseTour() {
  return (
    <section className="px-10 py-5 flex flex-col gap-15">
        <div>
          <h1 className="text-5xl text-center md:text-start md:text-6xl">Choose your tour</h1>
        </div>
        <div className="flex flex-wrap gap-5 justify-between">
          <CardTour/>
        </div>
    </section>
  )
}
