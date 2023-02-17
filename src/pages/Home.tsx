import { Link } from "react-router-dom";

export function Home () {

  return (

      <section 
        className='px-4 md:px-16 py-4 mt-6 w-3/5 min-h-[400px] h-full flex flex-col items-center shadow-xl shadow-goldDark border-t-4 border-gold'
      >
        
        <h1 className='font-bold text-2xl md:text-4xl'>Documentação</h1>
        <h2 className='font-bold text-sm md:text-base'>Projeto Portal Noivas</h2>
        
        <div className='pt-7'>
          
          <p>
            Site criado para documentação do Projeto Portal Noivas. Aqui você encontrará a descrição de 
            todos os arquivos e pastas do projeto.  
          </p>

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
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
                  Arquivo de imagem utilizado como banner na página principal do portal noivas.
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
                  O manifesto da aplicação web fornece informação sobre uma aplicação (como nome, autor, ícone, e 
                  descrição) num arquivo de texto JSON. O objetivo do manifest.json é instalar aplicações web na tela 
                  inicial de um dispositivo, proporcionando aos utilizadores um acesso mais rápido e uma experiência 
                  mais rica.
                </p>
              </details>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Roboto.txt</summary>

                <section className='pl-4'>
                  <p>
                    É usado para instruir os robôs/spiders utilizados pelos mecanismos de buscas (como Google e Bing)
                    a como rastrear e indexar as páginas de seu site.
                  </p>
                  <a 
                    className="text-blue-600"
                    href="https://handson-ti.com.br/para-que-serve-o-robots-txt/#:~:text=txt%3F-,Robot.,as%20p%C3%A1ginas%20de%20seu%20site."
                  >
                    Fonte original para saber mais
                  </a>
                </section>
              </details>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Banner2.jfif</summary>
                <p className='pl-4'>
                Arquivo de imagem utilizado como outra versão de banner nas páginas secundárias do portal noivas.
                </p>
              </details>
            </section>
          </details>

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta SRC</summary>
            <section className='pl-4'>
              <p>
                Aqui temos todos os arquivos que desenvolvemos como componentes, páginas da aplicação, hooks, 
                rotas dentre outros. Por ser muito conteúdo clique no link abaixo para mais informações.
              </p>
              <Link to="/PastaSRC" className="text-blue-500 hover:font-bold">Clique aqui!</Link>
            </section>
 
          </details>

          <details
          className='
            mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
          '
          >
            <summary className='font-bold cursor-pointer'>.gitignore</summary>
            <p className='pl-4'>É um arquivo de texto que diz ao Git quais arquivos ou pastas ele deve ignorar em um projeto.</p>
          </details>

          <details
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          >
            <summary className='font-bold cursor-pointer'>package-lock.json</summary>
            <section className='pl-4'>
              <cite>
                O package-lock.json é uma larga lista de dependências listadas no seu package.json, além de especificar 
                a versão exata que deve ser instalado, a localização do módulo (URI), o hash que verifica a integridade
                do módulo e a lista de pacotes necessários.
              </cite>
              <br />
              <a 
                className="text-blue-600"
                href="https://medium.com/devzera/tudo-que-voc%C3%AA-queria-saber-sobre-o-package-lock-json-mas-estava-com-vergonha-de-perguntar-e70589f2855f"
              >
                Fonte original para saber mais
              </a>
            </section>           
          </details>

          <details
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          >
            <summary className='font-bold cursor-pointer'>package.json</summary>
            <p className='pl-4'>
              Este arquivo é utilizado para guardar nossos scripts (comandos), bibliotecas, dependências dentre 
              outras informações como nome do projeto, versão e etc.
              </p>
          </details>

          <details
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          >
            <summary className='font-bold cursor-pointer'>README.md</summary>
            <p className='pl-4'>
              Arquivo utilizado pelo GitHub para mostrar o conteúdo deste arquivo como a descrição 
              desse projeto na plataforma
            </p>
          </details>

        </div>
      </section>

  )
}