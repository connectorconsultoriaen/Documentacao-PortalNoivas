import { Link } from "react-router-dom";

export function PastaPages () {
  return (
    
      <section 
        className='
          px-4 md:px-16 py-4 mt-6 w-3/5 min-h-[400px] h-full flex flex-col items-center 
          shadow-xl shadow-goldDark border-t-4 border-gold
        '
      >
        
        <h1 className='font-bold text-2xl md:text-4xl'>Documentação</h1>
        <h2 className='font-bold text-sm md:text-base'>Projeto Portal Noivas</h2>
        
        <div className='py-7 w-full'>

          <p>Todos as pastas e arquivos listados abaixo estão dentro da pasta Pages.</p>

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta Admin</summary>
            <section  className='pl-4'>
              <p>
                Aqui temos todos as páginas exclusivas para usuários administradores. Por ser muito conteúdo clique 
                no link abaixo para mais informações.
              </p>
              <Link to="/" className="text-blue-500 hover:font-bold">Clique aqui!</Link>
            </section>
          </details>          

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta Advertiser</summary>
            <section className='pl-4'>

              <p>
                Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar as rotas das 
                páginas relacionadas a anúncios e banners, como criação e listagem por exemplo.
              </p>
              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Pasta CriarAnuncio</summary>
                <section className='pl-4'>
                  <p>
                    Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar a 
                    página de criação de anúncios onde o anunciante encontra o formulário para cadastrar seu anúncio.
                  </p>
                  <details className='pt-2'>
                    <summary className='font-bold cursor-pointer'>AdvertisementForm</summary>
                    <p className='pl-4'>
                      
                    </p>
                  </details>

                </section>
              </details>

            </section>
          </details>    

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta AnuncieAqui</summary>
            <section className='pl-4'>
              <p>
                .
              </p>
              <details><summary>Pasta</summary><p>Em desenvolvimento</p></details>
              <details><summary>Pasta</summary><p>Em desenvolvimento</p></details>
              <details><summary>Pasta</summary><p>Em desenvolvimento</p></details>
            </section>
          </details>  

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta Anuncio</summary>
            <section className='pl-4'>
              <p>
                .
              </p>
              <details><summary>Pasta</summary><p>Em desenvolvimento</p></details>
              <details><summary>Pasta</summary><p>Em desenvolvimento</p></details>
              <details><summary>Pasta</summary><p>Em desenvolvimento</p></details>
            </section>
          </details>  
          
          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta Cotacao</summary>
            <section className='pl-4'>
              <p>
                .
              </p>
              <details><summary>Pasta</summary><p>Em desenvolvimento</p></details>
              <details><summary>Pasta</summary><p>Em desenvolvimento</p></details>
              <details><summary>Pasta</summary><p>Em desenvolvimento</p></details>
            </section>
          </details>  

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta EsqueciMinhaSenha</summary>
            <section className='pl-4'>
              <p>
                .
              </p>
              <details><summary>Pasta</summary><p>Em desenvolvimento</p></details>
              <details><summary>Pasta</summary><p>Em desenvolvimento</p></details>
              <details><summary>Pasta</summary><p>Em desenvolvimento</p></details>
            </section>
          </details>  
          
          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta GuiaDeEmpresas</summary>
            <section className='pl-4'>
              <p>
                .
              </p>
              <details><summary>Pasta</summary><p>Em desenvolvimento</p></details>
              <details><summary>Pasta</summary><p>Em desenvolvimento</p></details>
              <details><summary>Pasta</summary><p>Em desenvolvimento</p></details>
            </section>
          </details>  
          
          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta Home</summary>
            <section className='pl-4'>
              <p>
                Essa pasta contém um arquivo nomeado como index que é carregado ao importarmos a pasta. O componente dentro de index 
                é responsavel por renderizar a página principal da aplicação. 
              </p>
            </section>
          </details>  
          
          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta Login</summary>
            <section className='pl-4'>
              <p>
              Essa pasta contém dois arquivos, o principal nomeado como index.jsx é carregado ao importarmos a pasta e o index.css 
              utilizado para estilização. O componente index.jsx é responsável por renderizar a pasta de login. 
              </p>
            </section>
          </details>  

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta Materia</summary>
            <section className='pl-4'>
              <p>
              Essa pasta contém dois arquivos, o principal nomeado como index.jsx é carregado ao importarmos a pasta e o index.css 
              utilizado para estilização. O componente index.jsx é responsável por renderizar uma matéria publicada por um usuário. 
              </p>
            </section>
          </details>  

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta Materias</summary>
            <section className='pl-4'>
              <p>
                Essa pasta contém um arquivo e uma pasta, o arquivo nomeado como index.jsx é carregado ao importarmos a pasta. Sendo 
                esse arquivo responsável por renderizar um menu onde é possível ver todas as matérias escritas do site e filtrá-las. 
              </p>
              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>MateriasList</summary>
                <p className='pl-4'>
                  Essa pasta contém um arquivo, que é carregado ao importarmos a pasta. Sendo responsável por devolver uma lista 
                  de matérias baseado nos parâmetros passados e mostrar um resultado na tela.
                </p>
              </details>
            </section>
          </details>  
          
          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta MinhasCotacoes</summary>
            <section className='pl-4'>
              <p>
                Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar 
                as cotações do usuário, caso ele não tenha será renderizado uma mensagem para o usuário. 
              </p>
            </section>
          </details> 
          
          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta NoMatchPage</summary>
            <section className='pl-4'>
              <p>
                Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar 
                uma página de erro padrão que será mostrada toda vez que o usuário tentar buscar por uma url inexistente no site. 
              </p>
            </section>
          </details> 

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta Perfil</summary>
            <section className='pl-4'>
              <p>
                Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar 
                o perfil do usúario onde ele pode visualizar e alterar suas informações pessoais. 
              </p>
              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>components</summary>
                <section className='pl-4'>
                  <p>
                    Essa pasta contém componentes de uso exclusivo dessa pasta destinada a renderizar o Perfil do usúario. 
                  </p>
                    <details className='pt-2'>
                      <summary className='font-bold cursor-pointer'>DeleteUserModal</summary>
                      <p className='pl-4'>
                        Componente voltado para deletar a conta do usuário do banco de dados do site. Abre um modal para o usúario 
                        confirmar seu comando.
                      </p>
                    </details>

                    <details className='pt-2'>
                      <summary className='font-bold cursor-pointer'>UserForm</summary>
                      <p className='pl-4'>
                        Componente que renderiza o formulário de cadastro do usuário.
                      </p>
                    </details>
                </section>
              </details>     

            </section>
          </details> 

        </div>
      </section>
  )
}