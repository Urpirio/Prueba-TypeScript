import { Routes, Route } from "react-router";
import Home from "../pages/home";
import About from "~/pages/About";
import Header from "~/components/components - Global/Header";
import '../style/tailwind.css'

export default function layout() {
  return (
    <Routes>
        <Route index element={<div>
                <Header/>
                <Home/>
        </div>}/>
        <Route path="About" element={<div>
            <Header/>
            <About/>
        </div>}/>
    </Routes>
  )
}
