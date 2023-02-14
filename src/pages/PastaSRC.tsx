import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

export function PastaSRC () {

  const navigate = useNavigate();

  const goToPastaSRC = () => {
    navigate('/PastaSRC');
  }

  return (
    <div className="w-screen h-full flex flex-col items-center font-Poppins">
      <Header />

      <section 
        className='px-4 md:px-16 py-4 mt-6 w-3/5 min-h-[400px] h-full flex flex-col items-center shadow-xl shadow-goldDark border-t-4 border-gold'
      >
        
        <h1 className='font-bold text-2xl md:text-4xl'>Documentação</h1>
        <h2 className='font-bold text-sm md:text-base'>Projeto Portal Noivas</h2>
        
        <div className='pt-7'>
          

          <details className='mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip'> 
            <summary className='font-bold cursor-pointer'>Pasta Public</summary>
            <section className='pl-4'>
              <p>
                Aqui temos todos os arquivos que são públicos na aplicação, ou seja, que serão acessados quando a aplicação estiver rodando na internet.
              </p>
              
              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>index.html</summary>
                <p className='pl-4'>
                  Arquivo HTML que será o primeiro a carregar quando  a aplicação executar, é nesse arquivo base que o React vai utilizar para criar todo o conteúdo visual da aplicação.
                </p>
              </details>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Banner.png</summary>
                <p className='pl-4'>
                  Arquivo de imagem utilizado no como banner na página principal do portal noivas.
                </p>
              </details>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Logo.png</summary>
                <p className='pl-4'>
                  Arquivo de imagem utilizado como logo no header da página do portal noivas.
                </p>
              </details>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>icon.svg</summary>
                <p className='pl-4'>
                  Arquivo de svg utilizado no como icone mostrado no navegador quando o usúario estiver na página do portal noivas.
                </p>
              </details>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Manifest.json</summary>
                <p className='pl-4'>
                  Arquivo Json...
                </p>
              </details>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Roboto.txt</summary>
                <p className='pl-4'>
                </p>
              </details>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Banner2.jfif</summary>
                <p className='pl-4'>
                  Arquivo...
                </p>
              </details>
            </section>
          </details>

          <details className='mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip'> 
            <summary className='font-bold cursor-pointer'>Pasta SRC</summary>
            <section className='pl-4'>
              <p>
                Aqui temos todos os arquivos que desenvolvemos como componentes, páginas da aplicação, hooks, 
                rotas dentre outros. Por ser muito conteúdo clique no link abaixo para mais informações.
              </p>
              <button className="text-blue-500 hover:font-bold" onClick={goToPastaSRC}>Clique aqui!</button> 
            </section>
 
          </details>

        </div>
      </section>

      <Footer />
    </div>
  )
}