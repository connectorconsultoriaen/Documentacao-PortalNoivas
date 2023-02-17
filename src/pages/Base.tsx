import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Base () {
  return (
    <div className="w-full h-full flex flex-col items-center font-Poppins">
      <Header />

        <Outlet />

      <Footer />
    </div>    
  )
}