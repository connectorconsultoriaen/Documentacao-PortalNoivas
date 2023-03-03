export function PastaComponents () {

  return (

      <section 
        className='
          px-4 md:px-16 py-4 mt-6 w-3/5 min-h-[400px] h-full flex flex-col items-center shadow-xl shadow-goldDark border-t-4 border-gold
        '
      >
        
        <h1 className='font-bold text-2xl md:text-4xl'>Documentação</h1>
        <h2 className='font-bold text-sm md:text-base'>Projeto Portal Noivas</h2>
        
        <div className='py-7 w-full'>

          <p>Todos as pastas e arquivos listados abaixo estão dentro da pasta Components.</p>

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta Admin</summary>
            <section className='pl-4'>
              <p>
                Essa pasta guarda os componentes que criam funcionalidades exclusivas de usuários administradores.
              </p>
              
              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Pasta Menu</summary>
                <section className='pl-4'>
                  <p>
                    Essa pasta armazena os componentes que criam o menu dos usuários administradores. 
                  </p>

                  <details className='pt-2'>
                    <summary className='font-bold cursor-pointer'>AdminSideBarMenu</summary>
                    <p className='pl-4'>
                      Componente que constrói um menu com as funcionalidades que o usuário administrador pode acessar. 
                      Se utiliza do componente MenuItem para criar cada uma das rotas para as funcionalidades 
                      disponíveis.
                    </p>
                  </details>

                  <details className='pt-2'>
                    <summary className='font-bold cursor-pointer'>MenuItem</summary>
                    <p className='pl-4'>
                      Componente criado para evitar repetição de código e para estilização.
                    </p>
                  </details>
                </section>
              </details>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Pasta Table</summary>
                <section className='pl-4'>

                <details className='pt-2'>
                    <summary className='font-bold cursor-pointer'>ItemsPerPage</summary>
                    <p className='pl-4'>
                      Componente códificado para melhor experiência do usúario e controle da paginação, ele mostra 
                      os items por página e quantas páginas existem.
                    </p>
                  </details>

                  <details className='pt-2'>
                    <summary className='font-bold cursor-pointer'>Pagination</summary>
                    <p className='pl-4'>
                      Esse componente implementa a função de paginação na aplicação (sem uso de biblioteca).
                    </p>
                  </details>

                  <details className='pt-2'>
                    <summary className='font-bold cursor-pointer'>Table</summary>
                    <p className='pl-4'>
                      Esse componente renderiza uma Tabela genérica que recebe como parâmetro os campos, os dados e as ações 
                      do registro.
                    </p>
                  </details>                                                      

                </section>
              </details>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Filters</summary>
                <p className='pl-4'>
                  Componente utilizado para filtrar conteúdo dentro da aplicação, como artigos por exemplo.
                </p>
              </details>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Header</summary>
                <p className='pl-4'>
                  Componente que renderiza um título e subtitulo para descrever a funcionalidade oferecida pela 
                  página a qual for inserido.
                </p>
              </details>
            </section>
          </details>

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Pasta Form</summary>
            <section className='pl-4'>
              <p>
                Nesta pasta temos componentes que renderizam, um elemento de formulário utilizando a biblioteca "react-final-form" 
                em sua maioria. Porém temos a utilização de outras bibliotecas também. 
              </p>
              
              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Checkbox</summary>
                <p className='pl-4'>
                  Componente que renderiza um Checkbox.
                </p>
              </details>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Condition</summary>
                <p className='pl-4'>
                  Componente que renderiza o conteúdo dentro dele (podendo ser ou não outro componente), caso 
                  a condição imposta seja válida.
                </p>
              </details>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>CustomField</summary>
                <p className='pl-4'>
                  Códificado para customizar o comportamento do componente "Field" da biblioteca "react-final-form" para 
                  termos controle do novo comportamento "OnChange".
                </p>
              </details>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>DatePicker</summary>
                <p className='pl-4'>
                  Componente que utiliza a biblioteca "react-datepicker" e "date-fns" para renderizar um input que permite o 
                  usuário abrir um calendário no qual possa escolher uma data específica com ano, mês e dia.
                </p>
              </details>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Input</summary>
                <p className='pl-4'>
                  Componente que renderiza um input padrão.
                </p>
              </details>     

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Radio</summary>
                <p className='pl-4'>
                  Componente que renderiza um input do tipo radio.
                </p>
              </details>                       

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Select</summary>
                <p className='pl-4'>
                  Componente que renderiza um input de seleção de múltiplas escolhas, ou apenas uma, dentre as escolhas disponíveis.
                </p>
              </details>  

            </section>
          </details>

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>AnuncioCard</summary>
            <section className='pl-4'>
              <p>
              Um componente que renderiza um anúncio na aplicação. Esse anúncio é criado por usuário anunciante e aprovado 
              pelo administrador do site Portal Noiva.
              </p>
            </section>
          </details>

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>ArticleCard</summary>
            <section className='pl-4'>
              <p>
                Um componente que renderiza um artigo dentro da aplicação. Esse artigo possui a data de publicação e 
                mostra o número de visualizações.
              </p>
            </section>
          </details>

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>BannerCard</summary>
            <section className='pl-4'>
              <p>
                Um componente que renderiza um Banner na aplicação. Esse banner é criado por um terceiro que 
                tem interesse de anunciar o seu negócio no site Portal Noiva.
              </p>
            </section>
          </details>              

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>FeaturedCategoryCard</summary>
            <section className='pl-4'>
              <p>
                Um componente que renderiza um card com as informação da categoria que lhe for passada.
              </p>
            </section>
          </details>

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Footer</summary>
            <section className='pl-4'>
              <p>
                Um componente que cria o rodapé da aplicação. 
              </p>
            </section>
          </details>

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Masthead</summary>
            <section className='pl-4'>
              <p>
              Este componente cria uma aba de navegação na aplicação para permitir o usuário comum e o usuário logado 
              a navegaram pelas páginas disponíveis para eles respeitando o nível de acesso que cada um possui.
              </p>
            </section>
          </details>

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>Publicidade</summary>
            <section className='pl-4'>
              <p>
                Esse componente lista todos os banners da aplicação que batem com os requisitos de busca, são esses 
                requisitos: categoria, tipo, local, etc. Chama o componente PublicidadeBanner.jsx para renderizar os
                banner encontrados.
              </p>
            </section>
          </details>

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>PublicidadeBanner</summary>
            <section className='pl-4'>
              <p>
                Esse componente é responsavel por mostrar na tela as informações do banner que lhe foi passado pelo 
                componente Publicidade.jsx.
              </p>
            </section>
          </details>

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>RequireAuth</summary>
            <section className='pl-4'>
              <p>
                Esse componente é responsavel por realizar a autentificação do usuário no site. Permitindo assim que 
                ele acesse as funcionalidades reservadas a usuários logados.
                <br />
                Esse componente é chamado no arquivo routes.js localizado na pasta routes. Para realizar a 
                autentificação antes de redirecionar o usuário a determinada página.
              </p>
            </section>
          </details>

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>ScrollToTop</summary>
            <section className='pl-4'>
              <p>
               Esse componente é chamado toda vez que mudamos de página(url) no projeto, ele serve para mover a 
               página para topo, pois isso não acontece automaticamente.
              </p>
            </section>
          </details>

          <details 
            className='
              mt-4 p-1 open:border-[1px] open:border-gold open:bg-zinc-100 transition-all duration-200 text-clip
            '
          > 
            <summary className='font-bold cursor-pointer'>SideBarMenu</summary>
            <section className='pl-4'>
              <p>
               Esse componente cria um menu lateral na tela exibindo opções de navegação para o usúario. Além disso 
               também controla quando este menu abre e fecha na tela.
              </p>
            </section>
          </details>


        </div>
      </section>
  )
}