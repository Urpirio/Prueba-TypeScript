import CardTopValues from "../Subcomponents/CardTopValues";


export default function SectionTopValues() {
  return (
    <section className="flex flex-col px-5 gap-5">
        <div className="text-center flex flex-col gap-5">
          <h1 className="text-5xl md:text-6xl font-semibold">Top values for you</h1>
          <h2 className="text-xl text-gray-600">try variety of benefits when using our services</h2>
        </div>
        <div className="flex flex-wrap gap-10 justify-around py-5">
          <CardTopValues/>
        </div>
    </section>
  )
}
