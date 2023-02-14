export default function Header () {

  return (
    <header 
      className="w-screen h-1/5 flex flex-col justify-between items-center bg-gradient-to-r from-gold to-goldDark shadow-md shadow-slate-500/50"
    >

      <div className="max-w-sm py-2">
        {/* <h1 className="font-semibold text-lg text-white">Documentação</h1> */}
        <img src="/logo.png" alt="Logo do Portal Noivas" className="max-h-20 max-sm:max-h-14 "/>

      </div>

      {/* <div className="flex flex-row justify-evenly w-screen py-2 text-white font-extralight font-Poppins">
        <button className="hover:font-normal">Pasta Public</button>
        <button className="hover:font-normal">Pasta SRC</button>
      </div> */}
    </header>
  )
}