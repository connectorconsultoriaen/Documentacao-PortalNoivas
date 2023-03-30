import { DetailsLevel1, DetailsLevel2, DetailsLevel3 } from "../components/DetailsElements";

export function PastaPages () {
  return (      
    <div className='py-7 w-full'>

      <p>Todas as pastas e arquivos listados abaixo estão dentro da pasta Pages.</p>

      <DetailsLevel1
        title="Pasta Admin"
        text="Aqui temos todos as páginas exclusivas para usuários administradores. Por ser muito conteúdo clique 
        no link abaixo para mais informações."
        link="/Documentacao-PortalNoivas/PastaAdmin"
      />   

      <DetailsLevel1
        title="Pasta Advertiser"
        text="Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar as rotas das 
        páginas relacionadas a anúncios e banners, como criação e listagem, por exemplo. Possui quatro outras pastas que são responsáveis 
        por renderizar as páginas descritas anteriormente."
        importations={['react', 'react-router-dom', '../../hooks/useMenu', '../../components/SideBarMenu']}
      >
        <DetailsLevel2
          title="Pasta CriarAnuncio"
          text="Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar a 
          página de criação de anúncios onde o anunciante encontra o formulário para cadastrar seu anúncio. Além disso também 
          possui uma pasta."
          importations={[
            'semantic-ui-css/semantic.min.css',
            'react',
            'react-redux',
            'react-router-dom',
            'react-final-form', 
            'format-string-by-pattern',
            'draft-js',
            '../../../components/form/Input',
            '../../../components/form/Select',
            '../../../components/Masthead',
            '../../../components/Footer',
            '../../admin/Articles/components/RichTextEditor',
            '../../../store/actions/advertisement',
            '../../../store/actions/category',
            '../../../store/actions/location',
            '../../../store/actions/file'
          ]}
        >
        
          <DetailsLevel3
            title="Pasta Components"
            text="Nesta pasta temos um único componente utilizado para renderizar um formulário que cadastra as informações de um anúncio no banco de dados, 
            e também para mostrar os dados de um anúncio já existente."
            importations={[
              'semantic-ui-css/semantic.min.css',
              'react',
              'react-redux',
              'react-final-form', 
              'format-string-by-pattern',
              'draft-js',
              '../../../../components/form/DatePicker',
              '../../../../components/form/Condition',
              '../../../../components/form/Checkbox',
              '../../../components/form/Input',
              '../../../components/form/Select',
              '../../admin/Articles/components/RichTextEditor',
              '../../../../utils',
              '../../../store/actions/category',
              '../../../store/actions/location',
              '../../../store/actions/file'
            ]}
          />
        </DetailsLevel2>

        <DetailsLevel2
          title="Pasta CriarBanner"
          text="Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar a 
          página de criação de banners onde o anunciante encontra o formulário para cadastrar seu banner. Além disso também 
          possui uma pasta."
          importations={[
            'semantic-ui-css/semantic.min.css',
            'react',
            'react-redux',
            'react-router-dom',
            'react-final-form',
            '../../../components/form/Input',
            '../../../components/form/Condition',
            '../../../components/form/Select',
            '../../../components/Masthead',
            '../../../components/Footer',
            '../../../store/actions/banner',
            '../../../store/actions/category',
            '../../../store/actions/file'
          ]}
        >
          <DetailsLevel3
            title="Pasta Components"
            text="Nesta pasta temos um único componente utilizado para renderizar um formulário que cadastra as informações de um banner no banco de dados, 
            e também para mostrar os dados de um banner já existente."
            importations={[
              'semantic-ui-css/semantic.min.css',
              'react',
              'react-redux',
              'react-final-form',
              '../../../../components/form/DatePicker',
              '../../../components/form/Input',
              '../../../components/form/Condition',
              '../../../../components/form/Checkbox',
              '../../../components/form/Select',
              '../../../../utils',
              '../../../store/actions/category',
              '../../../store/actions/file'
            ]}
          />
        </DetailsLevel2>

        <DetailsLevel2
          title="Pasta MeusAnuncios"
          text='Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar a página "Meus Anúncios" e direcionar 
          o usuário para as páginas de edição ou listagem dos anúncios desse usuário. Além disso possui outras duas pastas.'
          importations={['semantic-ui-css/semantic.min.css', 'react', 'react-router-dom', '../../../components/Masthead', '../../../components/Footer']}
        >
          <DetailsLevel3
            title="Pasta MeusAnunciosEdit"
            text='Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar a Edição de anúncios na página "Meus Anúncios".'
          importations={[
            'react', 
            'react-router-dom', 
            'react-redux',
            'format-string-by-pattern', 
            '../../../advertiser/CriarAnuncio/components/AdvertisementForm',
            '../../../../store/actions/advertisement'
          ]}
          />
          <DetailsLevel3
            title="Pasta MeusAnunciosList"
            text='Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar a listagem de anúncios na página "Meus Anúncios".'
            importations={[
              'semantic-ui-css/semantic.min.css',
              'react', 
              'react-router-dom', 
              'react-redux',
              '../../../../components/AnuncioCard',
              '../../../../store/actions/advertisement',
              '../../../admin/Advertisements/components/AdminDeleteAdvertisementModal',
              '../../../../hooks/useModal'
            ]}
          />
        </DetailsLevel2>

        <DetailsLevel2
          title="Pasta MeusBanners"
          text='Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar a página "Meus Banners" e direcionar 
          o usuário para as páginas de edição ou listagem dos banners desse usuário. Além disso possui outras duas pastas.'
          importations={['semantic-ui-css/semantic.min.css', 'react', 'react-router-dom', '../../../components/Masthead', '../../../components/Footer']}
        >
          <DetailsLevel3
            title="Pasta MeusBannersEdit"
            text='Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar a Edição de banners na página "Meus Banners".'
            importations={['react', 'react-router-dom', 'react-redux', '../../CriarBanner/components/BannerForm', '../../../../store/actions/banner']}
          />
          <DetailsLevel3
            title="Pasta MeusBannersList"
            text='Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar a listagem de banners na página "Meus Banners".'
            importations={[
              'semantic-ui-css/semantic.min.css',
              'react', 
              'react-router-dom', 
              'react-redux',
              '../../../../components/BannerCard',
              '../../../../store/actions/banner',
              '../../../admin/Banners/components/AdminDeleteBannerModal',
              '../../../../hooks/useModal'
            ]}
          />
        </DetailsLevel2>
      </DetailsLevel1>
      
      <DetailsLevel1
        title="Pasta AnuncieAqui"
        text="Essa pasta contém dois arquivos, o principal nomeado como index.jsx é carregado ao importarmos a pasta e o index.css 
        utilizado para estilização. O componente index.jsx é responsável por renderizar a página de Anuncie Aqui."
        importations={[
          'semantic-ui-css/semantic.min.css',
          './index.css',
          'react',
          'react-router-dom',
          '../../components/Masthead',
          '../../components/Footer',
          '../../components/SideBarMenu',
          '../../hooks/useMenu', 
        ]}
      />

      <DetailsLevel1
        title="Pasta Anuncio"
        text="Essa pasta contém dois arquivos, o principal nomeado como index.jsx é carregado ao importarmos a pasta e o index.css 
        utilizado para estilização. O componente index.jsx é responsável por renderizar a página de um anuncio especifico 
        selecionado pelo usuário, nessa página o usuário tem acesso a todas as informações postas no anuncio pelo anunciante."
        importations={[
          'semantic-ui-css/semantic.min.css',
          'react-responsive-carousel/lib/styles/carousel.min.css',
          './index.css',
          'react',
          'react-redux',
          'react-router-dom',
          'semantic-ui-react',
          'react-responsive-carousel',
          'draft-js',
          'react-icons/hi',
          '../../components/Publicidade',
          '../../components/Masthead',
          '../../components/Footer',
          '../../store/actions/advertisement',
          '../../components/SideBarMenu',
          '../../hooks/useMenu', 
          '../admin/Articles/components/RichTextEditor',
          '../../utils',
          '../../store/actions/file'
        ]}
      />

      <DetailsLevel1
        title="Pasta Cadastro"
        text="Essa pasta contém dois arquivos, o principal nomeado como index.jsx é carregado ao importarmos a pasta e o index.css 
        utilizado para estilização. O componente index.jsx é responsável por renderizar a página de cadastro de um novo usuário."
        importations={[
          'semantic-ui-css/semantic.min.css',
          './index.css',
          'lodash',
          'react',
          'react-router-dom',
          'react-redux',
          'react-final-form',
          '../../components/form/Input',
          '../../components/form/Select',
          '../../components/form/Checkbox',
          '../../store/actions/auth',
          '../../store/actions/location',
          '../../components/Masthead',
          '../../components/Footer',
          '../../components/SideBarMenu',
          '../../hooks/useMenu', 
        ]}
      />       

      <DetailsLevel1
        title="Pasta Cotacao"
        text="Essa pasta contém dois arquivos, o principal nomeado como index.jsx é carregado ao importarmos a pasta e o index.css 
        utilizado para estilização. O componente index.jsx é responsável por renderizar a página de Cotação para que os usuários 
        preencham um formulário com suas especificações(formulário esse que só é disponível para usuários logados)."
        importations={[
          'semantic-ui-css/semantic.min.css',
          './index.css',
          'react',
          'react-redux',
          'react-router-dom',
          'react-final-form',
          '../../components/form/Input',
          '../../components/form/DatePicker',
          '../../components/form/Select',
          '../../components/SideBarMenu',
          '../../components/Masthead',
          '../../components/Footer',
          '../../store/actions/category',
          '../../store/actions/location',
          '../../store/actions/quotation',
          '../../hooks/useMenu', 
        ]}
      />

      <DetailsLevel1
        title="Pasta EsqueciMinhaSenha"
        text='Essa pasta contém dois arquivos, o principal nomeado como index.jsx é carregado ao importarmos a pasta e o index.css 
        utilizado para estilização. O componente index.jsx é responsável por renderizar a página "Esqueci Minha Senha".'
        importations={[
          'semantic-ui-css/semantic.min.css',
          './index.css',
          'lodash',
          'react',
          'react-router-dom',
          'react-final-form',
          '../../components/form/Input',
          '../../hooks/useMenu', 
          '../../store/actions/auth',
          '../../components/SideBarMenu',
          '../../components/Masthead',
          '../../components/Footer',
        ]}
      />
      
      <DetailsLevel1
        title="Pasta GuiaDeEmpresas"
        text='Essa pasta contém dois arquivos, o principal nomeado como index.jsx é carregado ao importarmos a pasta e o index.css 
        utilizado para estilização. O componente index.jsx é responsável por renderizar a página "Guia de Empresas". Além disso, possui 
        uma pasta components que armazena funcionalidades importantes para esta página.'
        importations={[
          'semantic-ui-css/semantic.min.css',
          './index.css',
          'react',
          'react-redux',
          'react-router-dom',
          '../../components/Masthead',
          '../../components/Footer',
          '../../components/Publicidade',
          './components/PublicAdvertisementList',
          './components/FeaturedAdvertisementList',
          './components/InRegionSaleAdvertisementList',
          '../../store/actions/category',
          '../../store/actions/location',
          '../../hooks/useMenu',
          '../../components/SideBarMenu',
          'react-icons/hi',
        ]}
      >
        <DetailsLevel2
          title="Pasta Components"
        >
          <DetailsLevel3
            title="Pasta FeaturedAdvertisementList"
            text="Nesta pasta temos um único componente utilizado para renderizar os anúncios certificados dentre aqueles filtrados pelo usuário, caso o usuário não tenha aplicado nenhum filtro mostrara todos os anúncios certificados. Caso não haja nenhum anúncio certificado, nada será renderizado na tela."
            importations={[
              'react',
              'react-redux',
              '../../../../store/actions/advertisement',
              '../../../../components/AnuncioCard',
            ]}
          />

          <DetailsLevel3
            title="Pasta PublicAdvertisementList"
            text="Nesta pasta temos um único componente utilizado para renderizar os anúncios dentre aqueles filtrados pelo usuário, caso o usuário não tenha aplicado nenhum filtro, mostrara todos os anúncios. Caso não haja nenhum anúncio, nada será renderizado na tela."
            importations={[
              'react',
              'react-redux',
              '../../../../store/actions/advertisement',
              '../../../../components/AnuncioCard',
              '../../../../components/admin/table/Pagination',
            ]}
          />

          <DetailsLevel3
            title="Pasta InRegionSaleAdvertisementList"
            text="Nesta pasta temos um único componente utilizado para renderizar os anúncios com desconto localizados na mesma região que o usuário. 
            Caso o usuário não tenha informado sua localização quando se cadastrou, nada será renderizado na tela."
            importations={[
              'react',
              'react-redux',
              '../../../../store/actions/advertisement',
              '../../../../components/AnuncioCard'
            ]}
          />
        </DetailsLevel2>
      </DetailsLevel1>

      <DetailsLevel1
        title="Pasta Home"
        text="Essa pasta contém um arquivo nomeado como index que é carregado ao importarmos a pasta. O componente dentro de index 
        é responsavel por renderizar a página principal da aplicação."
        importations={[
          'semantic-ui-css/semantic.min.css',
          'react',
          'react-router-dom',
          'react-final-form',
          'react-redux',
          '../../components/form/Select',
          '../../components/Masthead',
          '../../components/Footer',
          '../../components/AnuncioCard',
          '../../store/actions/category',
          '../../store/actions/location',
          '../../store/actions/advertisement',
          '../../components/SideBarMenu',
          '../../hooks/useMenu',
          '../../components/Publicidade',
          '../../components/FeaturedCategoryCard' 
        ]}
      />

      <DetailsLevel1
        title="Pasta Login"
        text="Essa pasta contém dois arquivos, o principal nomeado como index.jsx é carregado ao importarmos a pasta e o index.css 
        utilizado para estilização. O componente index.jsx é responsável por renderizar a página de Login."
        importations={[
          'semantic-ui-css/semantic.min.css',
          './index.css',
          'react',
          'react-router-dom',
          'react-redux',          
          'react-final-form',
          '../../components/form/Input',
          '../../store/actions/auth',
          '../../components/Masthead',
          '../../components/Footer',
          '../../components/SideBarMenu',
          '../../hooks/useMenu', 
        ]}
      />
      
      <DetailsLevel1
        title="Pasta Materia"
        text="Essa pasta contém dois arquivos, o principal nomeado como index.jsx é carregado ao importarmos a pasta e o index.css 
        utilizado para estilização. O componente index.jsx é responsável por renderizar a página que contém uma matéria 
        publicada por um usuário."
        importations={[
          'semantic-ui-css/semantic.min.css',
          './index.css',
          'react',
          'react-redux',          
          'react-router-dom',
          'draft-js',
          '../../components/Publicidade',
          '../../components/Masthead',
          '../../components/Footer',
          '../../store/actions/article',
          '../../hooks/useMenu', 
          '../../components/SideBarMenu',
          '../admin/Articles/components/RichTextEditor',
          '../../utils',
          '../../components/ArticleCard',
          '../../store/actions/file',
          '../../store/actions/auth',
        ]}
      />
      
      <DetailsLevel1
        title="Pasta Materias"
        text="Essa pasta contém um arquivo e uma pasta, o arquivo nomeado como index.jsx é carregado ao importarmos a pasta. Sendo 
        esse arquivo responsável por renderizar a página onde é possível ver selecionar todas as matérias escritas do site 
        e filtrá-las."
        importations={[
          'semantic-ui-css/semantic.min.css',
          'react',
          'react-redux',
          'react-router-dom',
          'react-icons/hi',
          '../../components/Masthead',
          '../../components/Footer',
          '../../store/actions/category',
          './MateriasList',
          '../../components/SideBarMenu',
          '../../hooks/useMenu',
        ]}
      >
        <DetailsLevel2
          title="MateriasList"
          text="Essa pasta contém um arquivo, que é carregado ao importarmos a pasta. Sendo responsável por devolver uma lista 
          de matérias baseado nos parâmetros passados e mostrar um resultado na tela."
          importations={[
            'react',
            'react-redux',
            '../../../components/admin/table/Pagination',
            '../../../components/ArticleCard',
            '../../../store/actions/article',
          ]}
        />
      </DetailsLevel1>

      <DetailsLevel1
        title="Pasta MinhasCotacoes"
        text="Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar 
        as cotações do usuário, caso ele não tenha será renderizado uma mensagem para o usuário."
        importations={[
          'semantic-ui-css/semantic.min.css',
          'react',
          'react-redux',
          'react-router-dom',
          '../../components/Masthead',
          '../../components/Footer',
          '../../store/actions/quotation',
          '../../components/SideBarMenu',
          '../../hooks/useMenu',
        ]}
      />
      
      <DetailsLevel1
        title="Pasta NoMatchPage"
        text="Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar 
        uma página de erro padrão que será mostrada toda vez que o usuário tentar buscar por uma URL inexistente no site."
        importations={[
          'semantic-ui-css/semantic.min.css',
          'react',
          '../../hooks/useMenu',
          '../../components/Masthead',
          '../../components/Footer',
          '../../components/SideBarMenu',
        ]}
      />

      <DetailsLevel1
        title="Pasta Perfil"
        text="Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar 
        o perfil do usuário onde ele pode visualizar e alterar suas informações pessoais. Além disso, também possui uma pasta 
        onde ficam os componentes de uso exclusivo da página de perfil do usuário."
        importations={[
          'semantic-ui-css/semantic.min.css',
          'react',
          'react-redux',
          'format-string-by-pattern',
          '../../hooks/useModal',
          '../../components/Masthead',
          '../../components/Footer',
          './components/UserForm',
          '../../store/actions/auth',
          './components/DeleteUserModal',
          '../../components/SideBarMenu',
          '../../hooks/useMenu',
        ]}
      >
        <DetailsLevel2
          title="Pasta Components"
        >
          <DetailsLevel3
            title="DeleteUserModal"
            text="Componente voltado para deletar a conta do usuário do banco de dados do site. Abre um modal para o usuário 
            confirmar seu comando."
            importations={[
              'react',
              'semantic-ui-react',
              'react-redux',
              '../../hooks/useModal',
              '../../store/actions/auth',
            ]}
          />

          <DetailsLevel3
            title="UserForm"
            text="Componente que renderiza o formulário com as informações do usuário já inserida, podendo 
            esse usuário alterar ou apenas visualizar essas informações."
            importations={[
              'react',
              'react-redux',
              'react-final-form',
              'format-string-by-pattern',
              '../../../components/form/CustomField',
              '../../../components/form/Input',
              '../../../components/form/Select',
              '../../../store/actions/location',
            ]}
          />
        </DetailsLevel2>
      </DetailsLevel1>

    </div>
  )
}