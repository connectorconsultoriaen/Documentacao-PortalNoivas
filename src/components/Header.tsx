import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

export default function Header () {

  const [visibility, setVisibility] = useState('invisible md:visible flex flex-row justify-evenly w-3/5 py-2 text-white font-extralight font-Poppins')
  
  const handleMenu = () => {
    const web = "invisible md:visible flex flex-row justify-evenly w-3/5 py-2 text-white font-extralight font-Poppins"
    const mobile = `
      fixed w-full h-full flex flex-col overflow-x-hidden overflow-y-hidden justify-evenly items-center bg-gradient-to-r from-goldDark to-gold 
      md:invisible top-0 text-white text-3xl font-bold underline transition-all
    `

    if (window.screen.width < 768) {
      return web === visibility ? setVisibility(mobile) : setVisibility(web);
    }

    return null;
  }

  return (
    <header 
      className="
      w-full h-1/5 flex justify-between items-center bg-gradient-to-r from-goldDark to-gold 
      shadow-md shadow-slate-500/50
      "
    >

      <div className="p-3 ml-4">
        <img src="/Documentacao-PortalNoivas/logo.png" alt="Logo do Portal Noivas" className="max-h-14 max-sm:max-h-12"/>
      </div>

      <div className='visible absolute text-2xl ml-[90%] text-white md:invisible' onClick={handleMenu}>
        <GiHamburgerMenu />
      </div>

      <div 
        className={visibility}
      >
                <Link 
          to="/Documentacao-PortalNoivas/" 
          className="font-normal hover:font-semibold"
          onClick={handleMenu}>
            Home
        </Link>

        <Link 
          to="/Documentacao-PortalNoivas/PastaSRC" 
          className="font-normal hover:font-semibold"
          onClick={handleMenu}>
            SRC
        </Link>
        
        <Link 
          to="/Documentacao-PortalNoivas/PastaComponents" 
          className="font-normal hover:font-semibold"
          onClick={handleMenu}>
            Components
        </Link>
        
        <Link 
          to="/Documentacao-PortalNoivas/PastaPages" 
          className="font-normal hover:font-semibold"
          onClick={handleMenu}>
            Pages
        </Link>
        
        <Link 
          to="/Documentacao-PortalNoivas/PastaStore" 
          className="font-normal hover:font-semibold"
          onClick={handleMenu}>
            Store
        </Link>
      </div>
    </header>
  )
}