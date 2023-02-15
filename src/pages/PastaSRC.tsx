import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

export function PastaSRC () {

  const navigate = useNavigate();

  const navigatingTo = () => {
    navigate('/PastaComponents');
  }

  return (

      <section 
        className='
          px-4 md:px-16 py-4 mt-6 w-3/5 min-h-[400px] h-full flex flex-col items-center shadow-xl shadow-goldDark border-t-4 border-gold
        '
      >
        
        <h1 className='font-bold text-2xl md:text-4xl'>Documentação</h1>
        <h2 className='font-bold text-sm md:text-base'>Projeto Portal Noivas</h2>
        
        <div className='py-7'>

          <p>Todos as pastas e arquivos listados abaixo estão dentro da pasta SRC</p>

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta Apis</summary>
            <section className='pl-4'>
              <p>
                Nesta pasta temos a conexão com o back-end, junto com simulações de respostas do servidor para testes.
              </p>
              
              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Pasta mockups</summary>
                <p className='pl-4'>
                  Nesta pasta utilizimamos arquivos javascript para criar arquivos json que simulam uma resposta do banco de dados. 
                  Como por exemplo retornar as informações dos anunciantes, imagens, cotações e etc. É uma pasta exclusiva para 
                  testar funcionalidades caso a conexão com o banco não esteja disponivel durante o desenvolvimento.
                </p>
              </details>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>index.js</summary>
                <p className='pl-4'>
                  Arquivo javascript que faz a conexão com o banco de dados utilizando a biblioteca axios.
                </p>
              </details>
            </section>
          </details>

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta Components</summary>
            <section className='pl-4'>
              <p>
                Esta é a pasta que armazena todos os componentes da nossa aplicação. Por ser muito conteúdo clique 
                no link abaixo para mais informações.
              </p>
              <button className="text-blue-500 hover:font-bold" onClick={navigatingTo}>Clique aqui!</button> 
            </section>
 
          </details>

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta Hooks</summary>
            <section className='pl-4'>
              <p>
                Nesta pasta temos hooks personalizados criados, a partir de hooks já existentes, expecificamente para 
                atender as necessidades do projeto. 
              </p>
              
              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>useMenu.js</summary>
                <p className='pl-4'>
                  Esse hook foi criado para controlarmos se o Menu, verificando se ele está aberto ou fechado, para caso esteja aberto 
                  possamos fecha-lo e vice-versa
                </p>
              </details>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>useModal.js</summary>
                <p className='pl-4'>
                  Arquivo javascript...
                </p>
              </details>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>usePageSelection.js</summary>
                <p className='pl-4'>
                  Arquivo javascript...
                </p>
              </details>
            </section>
          </details>

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta Pages</summary>
            <section className='pl-4'>
              <p>
                Esta é a pasta que armazena todas as páginas da nossa aplicação. Por ser muito conteúdo clique 
                no link abaixo para mais informações.
              </p>
              <button className="text-blue-500 hover:font-bold" onClick={navigatingTo}>Clique aqui!</button> 
            </section>
 
          </details>

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta Routes</summary>
            <section className='pl-4'>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>history.js</summary>
                <p className='pl-4'>
                  Arquivo que nos permite ter um historico que possamos utilizar e manipular ao longo da nossa aplicação.
                </p>
              </details>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>routes.js</summary>
                <p className='pl-4'>
                  Arquivo no qual configuramos todas as rotas(caminhos) da nossa aplicação utilizando a biblioteca do React Router DOM. 
                  Para alterar as informações contidas aqui é importante ter o conhecimento intermediario da biblioteca utilizada.
                </p>
              </details>
            </section>
          </details>


          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta Store</summary>
            <section className='pl-4'>
              <p>
                Esta é a pasta que armazena todas interações com a biblioteca Redux. Por ser muito conteúdo clique 
                no link abaixo para mais informações.
              </p>
              <button className="text-blue-500 hover:font-bold" onClick={navigatingTo}>Clique aqui!</button> 
            </section>
 
          </details>


          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta Utils</summary>
            <section className='pl-4'>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>index.js</summary>
                <p className='pl-4'>
                  Arquivo javascript...
                </p>
              </details>

            </section>
          </details>


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
                Arquivo que faz a conexão do nosso arquivo app.jsx com nosso html. Renderizando todo nosso conteúdo 
                e definindo o historico e habilitando os arquivos da nossa pasta Store em toda a aplicação.
              </p>
            </section>
          </details>   

        </div>
      </section>

  )
}