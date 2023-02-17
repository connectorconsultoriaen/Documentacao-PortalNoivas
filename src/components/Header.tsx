import { Link } from 'react-router-dom';


export default function Header () {

  return (
    <header 
      className="
      w-screen h-1/5 flex justify-between items-center bg-gradient-to-r from-goldDark to-gold 
      shadow-md shadow-slate-500/50
      "
    >

      <div className="p-3 ml-4">
        <img src="/logo.png" alt="Logo do Portal Noivas" className="max-h-14 max-sm:max-h-12"/>
      </div>

      <div 
        className="
          invisible md:visible flex flex-row justify-evenly w-3/5 py-2
          text-white font-extralight font-Poppins
        "
      >
        <Link 
          to="/" 
          className="font-normal hover:font-semibold">
            Home
        </Link>

        <Link 
          to="/PastaSRC" 
          className="font-normal hover:font-semibold">
            SRC
        </Link>
        
        <Link 
          to="/PastaComponents" 
          className="font-normal hover:font-semibold">
            Components
        </Link>
        
        <Link 
          to="/PastaPages" 
          className="font-normal hover:font-semibold">
            Pages
        </Link>
        
        <Link 
          to="/PastaStore" 
          className="font-normal hover:font-semibold">
            Store
        </Link>
      </div>
    </header>
  )
}