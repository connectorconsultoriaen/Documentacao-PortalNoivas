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
                    <p className='pl-4 text-red-600'>
                      Componente que carrega uma página cuja rota é passada por props.
                    </p>
                  </details>
                </section>

              </details>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Pasta Table</summary>
                <section className='pl-4'>

                  <details className='pt-2'>
                    <summary className='font-bold cursor-pointer'>Filters</summary>
                    <p className='pl-4'>
                      Componente utilizado para filtrar conteúdo dentro da aplicação, como artigos por exemplo.
                    </p>
                  </details>

                  <details className='pt-2'>
                    <summary className='font-bold cursor-pointer'>Header</summary>
                    <p className='pl-4 text-red-600'>
                      Componente que cria o cabeçalho de um artigo.
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
            <summary className='font-bold cursor-pointer'>Pasta Form</summary>
            <section className='pl-4'>
              <p>
                Nesta pasta temos componentes que criam, cada um, uma parte de um formulário ou elementos relacionados. 
              </p>
              
              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Checkbox</summary>
                <p className='pl-4'>
                  Cria um Checkbox.
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
                  Cria um Campo personalizável no formulário.
                </p>
              </details>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>DatePicker</summary>
                <p className='pl-4'>
                  Componente que cria um input de data.
                </p>
              </details>

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Input</summary>
                <p className='pl-4'>
                  Cria um input padrão.
                </p>
              </details>     

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Radio</summary>
                <p className='pl-4'>
                  Componente que cria um input do tipo radio.
                </p>
              </details>                       

              <details className='pt-2'>
                <summary className='font-bold cursor-pointer'>Select</summary>
                <p className='pl-4'>
                  Componente que cria um input de seleção de múltiplas escolhas ou apenas uma dentre as escolhas disponíveis.
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
              Um componente que cria um anúncio na aplicação. Esse anúncio é criado por um terceiro que tem interrese 
              de anunciar o seu negócio no site Portal Noiva.
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
                Um componente que cria um artigo dentro da aplicação. Esse artigo criado possui a data de publicação e 
                controla o número de visualizações.
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
              Um componente que cria um Banner na aplicação. Esse banner é criado por um terceiro que 
                tem interrese de anunciar o seu negocio no site Portal Noiva.
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
                Um componente que...
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
                Esse componente é responsavel por mostrar na tela os banner encontrados pelo
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