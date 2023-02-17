export function PastaPages () {
  return (
    
      <section 
        className='
          px-4 md:px-16 py-4 mt-6 w-3/5 min-h-[400px] h-full flex flex-col items-center shadow-xl shadow-goldDark border-t-4 border-gold
        '
      >
        
        <h1 className='font-bold text-2xl md:text-4xl'>Documentação</h1>
        <h2 className='font-bold text-sm md:text-base'>Projeto Portal Noivas</h2>
        
        <div className='py-7 w-full'>

          <p>Todos as pastas e arquivos listados abaixo estão dentro da pasta SRC</p>

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>App.css</summary>
            <section className='pl-4'>
              <p>Arquivo de estilização global para toda á aplicação</p>
            </section>
          </details>          


          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>App.jsx</summary>
            <section className='pl-4'>
              <p>
                Arquivo principal onde chamamos nossas rotas para gerenciar a aplicação.
              </p>
            </section>
          </details>    

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>index.js</summary>
            <section className='pl-4'>
              <p>
                Arquivo que faz a conexão do nosso arquivo app.jsx com nosso html. Renderizando nosso conteúdo, 
                definindo o historico e habilitando os arquivos da nossa pasta Store em toda a aplicação.
              </p>
            </section>
          </details>   

        </div>
      </section>
  )
}