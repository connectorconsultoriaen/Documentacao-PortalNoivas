import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Base () {
  return (
    <div className="w-full h-full flex flex-col items-center font-Poppins">
      <Header />
        <section 
          className='px-4 md:px-16 py-4 mt-6 w-11/12 md:w-3/5 min-h-[400px] h-full flex flex-col items-center shadow-md shadow-goldDark border-t-4 border-gold'
        >
        
          <h1 className='font-bold text-2xl md:text-4xl'>Documentação</h1>
          <h2 className='font-bold text-xs md:text-base'>Projeto Portal Noivas</h2>
          
          <Outlet />
          
        </section>

      <Footer />
    </div>    
  )
}