import { Link } from "react-router";
import SectionChooseTour from "~/components/components - Home/components/Section - ChooseTour";
import SectionExplore from "~/components/components - Home/components/Section - Explore";
import SectionTopValues from "~/components/components - Home/components/Section - TopValues";


export default function Home() {
  return (
    <main>
      <SectionExplore/>
      <SectionTopValues/>
      <SectionChooseTour/>
    </main>
  )
}

