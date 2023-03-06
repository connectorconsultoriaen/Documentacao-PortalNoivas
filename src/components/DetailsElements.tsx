import { Link } from "react-router-dom"

interface SettingsDetails {
  title: string, 
  text?: string,
  link?: string
  children?: React.ReactNode
}

export function DetailsLevel1({title, text, link, children}: SettingsDetails) {
  return (

    <details 
      className='
        mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
      '
    > 
      <summary className='font-bold cursor-pointer text-sm md:text-base'>{title}</summary>
      <section className='pl-4'>
        <p className="text-xs md:text-base">
          {text}
        </p>
        
        {
          link ? 
            <Link 
              to={link} 
              className="text-blue-500 hover:font-bold hover:underline text-xs md:text-base" 
            >
              Clique aqui!
            </Link>
          : null
        }

        {children}

      </section>
    </details>
  )
}

export function DetailsLevel2({title, text, link, children}: SettingsDetails) {
  return (
    <details className='pt-2'>
      <summary className='font-bold cursor-pointer text-sm md:text-base'>{title}</summary>
      <section className='pl-4'>
        <p className="text-xs md:text-base">
          {text}
        </p>

        {
            link ? 
              <Link 
                to={link} 
                className="text-blue-500 hover:font-bold hover:underline text-xs md:text-base" 
              >
                Clique aqui!
              </Link>
            : null
        }

        {children}
      </section>
    </details>
  )
}

export function DetailsLevel3({title, text, link, children}: SettingsDetails) {
  return(
    <details className='pt-2'>
    <summary className='font-bold cursor-pointer text-sm md:text-base'>{title}</summary>
    <section className='pl-4'>
      <p className="text-xs md:text-base">
        {text}
      </p>

      { 
        link ? 
          <Link 
            to={link} 
            className="text-blue-500 hover:font-bold hover:underline text-xs md:text-base" 
          >
            Clique aqui!
          </Link>
        : null
      }

      {children}
    </section>
  </details>
  )
}