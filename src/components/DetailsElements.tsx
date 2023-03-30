import { Link } from "react-router-dom"

interface SettingsDetails {
  title: string, 
  text?: string,
  link?: string,
  importations?: Array<string>,
  children?: React.ReactNode
}

export function DetailsLevel1({title, text, link, children, importations}: SettingsDetails) {
  return (
    <details 
      className='
        mt-4 p-2 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
      '
    > 
      <summary className='font-bold cursor-pointer text-sm md:text-base'>{title}</summary>
      <section className='pl-4'>
        <p className="text-xs md:text-base text-justify">
          {text}
        </p>
        
        {link ? 
          <Link 
            to={link} 
            className="text-blue-500 hover:font-bold hover:underline text-xs md:text-base" 
          >
            Clique aqui!
          </Link>
        : null}

        {importations ? 
          <>
            <p className="text-xs md:text-base mt-2">
              Bibliotecas, componentes e/ou arquivos importados que foram utilizados:
            </p>
            <ul className="pl-4 overflow-auto">
              {
                importations.map( (item, i) => <li className="list-disc text-xs md:text-sm" key={item + i}>{item}</li>)
              }
            </ul>

            
          </>
        : null}

        {children}
      </section>
    </details>
  )
}

export function DetailsLevel2({title, text, link, children, importations}: SettingsDetails) {
  return (
    <details className='pt-2'>
      <summary className='font-bold cursor-pointer text-sm md:text-base'>{title}</summary>
      <section className='pl-4'>
        <p className="text-xs md:text-base text-justify">
          {text}
        </p>

        {link ? 
          <Link 
            to={link} 
            className="text-blue-500 hover:font-bold hover:underline text-xs md:text-base" 
          >
            Clique aqui!
          </Link>
        : null}

        {importations ? 
          <>
            <p className="text-xs md:text-base mt-2">
              Bibliotecas, componentes e/ou arquivos importados que foram utilizados:
            </p>
            <ul className="pl-4 overflow-auto">
              {
                importations.map( (item, i) => <li className="list-disc text-xs md:text-sm" key={item + i}>{item}</li>)
              }
            </ul>

            
          </>
        : null}

        {children}
      </section>
    </details>
  )
}

export function DetailsLevel3({title, text, link, children, importations}: SettingsDetails) {
  return(
    <details className='pt-2'>
    <summary className='font-bold cursor-pointer text-sm md:text-base'>{title}</summary>
    <section className='pl-4'>
      <p className="text-xs md:text-base text-justify">
        {text}
      </p>

      {link ? 
          <Link 
            to={link} 
            className="text-blue-500 hover:font-bold hover:underline text-xs md:text-base" 
          >
            Clique aqui!
          </Link>
        : null}

      {importations ? 
        <>
          <p className="text-xs md:text-base mt-2">
            Bibliotecas, componentes e/ou arquivos importados que foram utilizados:
          </p>
          <ul className="pl-4 overflow-auto">
            {
              importations.map( (item, i) => <li className="list-disc text-xs md:text-sm" key={item + i}>{item}</li>)
            }
          </ul>
        </>
      : null}
      
    {children}

    </section>
  </details>
  )
}