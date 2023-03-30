import { DetailsLevel1, DetailsLevel2 } from '../components/DetailsElements';

export function PastaSRC () {
  return (        
    <div className='py-7 w-full'>

      <p>As pastas e arquivos listados abaixo estão dentro da pasta SRC</p>

      <DetailsLevel1 
        title='Pasta Apis'
        text='Nesta pasta temos a conexão com o back-end, junto com simulações de respostas do servidor para testes.'
      >
        <DetailsLevel2 
          title='Pasta Mockups'
          text='
            Nesta pasta utilizimamos arquivos javascript para criar arquivos json que simulam uma resposta do banco de dados. 
            Como por exemplo retornar as informações dos anunciantes, imagens, cotações e etc. É uma pasta exclusiva para 
            testar funcionalidades caso a conexão com o banco não esteja disponivel durante o desenvolvimento.
          '
        />
        <DetailsLevel2 
          title='index.js'
          text='
            Arquivo javascript que faz a conexão com o banco de dados.
          '
          importations={["axios"]}
        />
      </DetailsLevel1>

      <DetailsLevel1 
        title="Pasta Components" 
        text="
          Esta é a pasta que armazena todos os componentes da nossa aplicação. Por ser muito conteúdo clique 
          no link abaixo para mais informações.
        " 
        link="/Documentacao-PortalNoivas/PastaComponents"
      />

      <DetailsLevel1 
        title='Pasta Hooks'
        text='Nesta pasta temos hooks personalizados criados, a partir de hooks já existentes, especificamente para atender as necessidades do projeto, podendo ser usados em vários locais da aplicação, evitando assim repetição de código.'
      >
        <DetailsLevel2 
          title='useMenu.js'
          text='Esse hook foi criado para controlarmos o Menu, verificando se ele está aberto ou fechado, para caso esteja aberto 
          possamos fecha-lo e vice-versa.'
          importations={['react', 'react-redux', '../store/actions/menu']}
        />
        <DetailsLevel2 
          title='useModal.js'
          text='Esse hook foi criado para controlarmos o Modal da aplicação, com ele podemos ver se o modal está ou não aberto e mudar este estado, assim 
          como também podemos ver qual item o modal tem selecionado e definir este item.'
          importations={['react-redux', '../store/actions/modal']}
        />
        <DetailsLevel2 
          title='usePageSelection.js'
          text='Esse hook foi criado para controlarmos a páginação de listas extensas de elementos, definindo seus limites como a quantidade de páginas e o número de elementos 
          mostrado por página'
          importations={['react-router-dom']}
        />
      </DetailsLevel1>

      <DetailsLevel1
        title='Pasta Pages'
        text='Esta é a pasta que armazena todas as páginas da nossa aplicação. Por ser muito conteúdo clique 
        no link abaixo para mais informações.'
        link='/Documentacao-PortalNoivas/PastaPages'
      />

      <DetailsLevel1 title='Pasta Routes'>
        <DetailsLevel2 
          title='history.js'
          text='Arquivo que nos permite ter um historico que possamos utilizar e manipular ao longo da nossa aplicação.'
          importations={['history']}
        />
        <DetailsLevel2 
          title='routes.js'
          text='Arquivo no qual configuramos todas as rotas(caminhos) da nossa aplicação. 
          Para alterar as informações contidas aqui é importante ter o conhecimento intermediario da biblioteca utilizada.'
          importations={[
            'react-router-dom', 
            'react-toastify', 
            '../components/ScrollToTop', 
            '../pages/Home', 
            '../pages/AnuncieAqui', 
            '../pages/Login', 
            '../pages/Cadastro', 
            '../pages/EsqueciMinhaSenha',
            '../pages/Cotacao',
            '../pages/Materias',
            '../pages/Materia',
            '../pages/GuiaDeEmpresas',
            '../pages/Anuncio',
            '../pages/NoMatchPage',
            '../components/RequireAuth',
            '../pages/Perfil',
            '../pages/MinhasCotacoes',
            '../pages/advertiser/Advertiser',
            '../pages/advertiser/CriarAnuncio',
            '../pages/advertiser/MeusAnuncios',
            '../pages/advertiser/MeusAnuncios/MeusAnunciosList',
            '../pages/advertiser/MeusAnuncios/MeusAnunciosEdit',
            '../pages/advertiser/CriarBanner',
            '../pages/advertiser/MeusBanners',
            '../pages/advertiser/MeusBanners/MeusBannersList',
            '../pages/advertiser/MeusBanners/MeusBannersEdit',
            '../pages/admin/Admin',
            '../pages/admin/Dashboard',
            '../pages/admin/NoMatch',
            '../pages/admin/Users',
            '../pages/admin/Users/UserList',
            '../pages/admin/Users/UserCreate',
            '../pages/admin/Users/UserEdit',
            '../pages/admin/Advertisements',
            '../pages/admin/Advertisements/AdvertisementList',
            '../pages/admin/Advertisements/AdvertisementCreate',
            '../pages/admin/Advertisements/AdvertisementEdit',
            '../pages/admin/Categories',
            '../pages/admin/Categories/CategoryList',
            '../pages/admin/Categories/CategoryCreate',
            '../pages/admin/Categories/CategoryEdit',
            '../pages/admin/Locations',
            '../pages/admin/Locations/LocationList',
            '../pages/admin/Locations/LocationCreate',
            '../pages/admin/Locations/LocationEdit',
            '../pages/admin/Quotations',
            '../pages/admin/Quotations/QuotationList',
            '../pages/admin/Articles',
            '../pages/admin/Articles/ArticleList', 
            '../pages/admin/Articles/ArticleCreate',
            '../pages/admin/Articles/ArticleEdit',
            '../pages/admin/ArticleCategories',
            '../pages/admin/ArticleCategories/ArticleCategoryList',
            '../pages/admin/ArticleCategories/ArticleCategoryCreate',
            '../pages/admin/ArticleCategories/ArticleCategoryEdit',
            '../pages/admin/ArticleCategories/ArticleSubCategoryCreate',
            '../pages/admin/ArticleCategories/ArticleSubCategoryEdit',
            '../pages/admin/Banners',
            '../pages/admin/Banners/BannerList',
            '../pages/admin/Banners/BannerCreate',
            '../pages/admin/Banners/BannerEdit'
          ]}
        />
      </DetailsLevel1>

      <DetailsLevel1
        title='Pasta Store'
        text='Esta é a pasta que armazena todas interações com a biblioteca Redux. Por ser muito conteúdo clique 
        no link abaixo para mais informações.'
        link='/Documentacao-PortalNoivas/PastaStore'
      />

      <DetailsLevel1 title='Pasta Utils'>
        <DetailsLevel2 
          title='index.js'
          text='Arquivo javascript que guarda funções utilitarias que são usadas em outras partes do projeto, 
          com a finalidade de evitar repetição de código.'
        />
      </DetailsLevel1>

      <DetailsLevel1
        title='App.css'
        text='Arquivo de estilização global para toda á aplicação.'
      />    

      <DetailsLevel1
        title='App.jsx'
        text='Arquivo principal onde chamamos nossas rotas para gerenciar a aplicação.'
        importations={[
          './App.css',
          'react',
          'react-redux',
          './routes/routes',
          './routes/history',
          './store/actions/auth',
          './store/actions/user',
          './store/actions/advertisement'
        ]}
      />

      <DetailsLevel1
        title='Index.js'
        text='Arquivo que faz a conexão do nosso arquivo app.jsx com nosso html. Renderizando nosso conteúdo, 
        definindo o historico e habilitando os arquivos da nossa pasta Store em toda a aplicação.'
        importations={[
          'react', 
          'react-dom/client',
          'react-redux',
          'react-router-dom', 
          './store', 
          './App', 
          './routes/history'
        ]}
      /> 
    </div>
  )
}