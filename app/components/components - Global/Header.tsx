import { Link } from "react-router";
import { RiMenu3Fill } from "react-icons/ri";

export default function Header() {
  return (
    <header className="flex justify-between px-5 pt-5">
        <div className="flex flex-grow">
            <h1 className="text-4xl font-bold">iSland*</h1>
        </div>
        <div className="md:flex hidden  flex-grow">
            <nav className="w-full flex justify-between items-center">
                <Link to={''} title="Our tours">Our tours</Link>
                <Link to={''} title="About us">About us</Link>
                <Link to={''} title="Booking">Booking</Link>
                <Link to={''} title="FAQ">FAQ</Link>
            </nav>
        </div>
        <div className="flex flex-grow justify-end">
            <button>
                <RiMenu3Fill className="text-3xl"/>
            </button>    
        </div>
    </header>
  )
}
