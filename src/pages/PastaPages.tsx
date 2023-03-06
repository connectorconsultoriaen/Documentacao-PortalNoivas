import { Link } from "react-router-dom";
import { DetailsLevel1, DetailsLevel2, DetailsLevel3 } from "../components/DetailsElements";

export function PastaPages () {
  return (      
    <div className='py-7 w-full'>

      <p>Todas as pastas e arquivos listados abaixo estão dentro da pasta Pages.</p>

      <DetailsLevel1
        title="Pasta Admin"
        text="Aqui temos todos as páginas exclusivas para usuários administradores. Por ser muito conteúdo clique 
        no link abaixo para mais informações."
        link="/Documentacao-PortalNoivas/"
      />   

      <DetailsLevel1
        title="Pasta Advertiser"
        text="Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar as rotas das 
        páginas relacionadas a anúncios e banners, como criação e listagem, por exemplo. Possui quatro outras pastas que são responsáveis 
        por renderizar as páginas descritas anteriormente."
      >
        <DetailsLevel2
          title="Pasta CriarAnuncio"
          text="Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar a 
          página de criação de anúncios onde o anunciante encontra o formulário para cadastrar seu anúncio. Além disso também 
          possui uma pasta."
        >
        
          <DetailsLevel3
            title="Pasta Components"
            text="Nesta pasta temos um único componente utilizado para renderizar um formulário que cadastra as informações de um anúncio no banco de dados, 
            e também para mostrar os dados de um anúncio já existente."
          />
        </DetailsLevel2>

        <DetailsLevel2
          title="Pasta CriarBanner"
          text="Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar a 
          página de criação de banners onde o anunciante encontra o formulário para cadastrar seu banner. Além disso também 
          possui uma pasta."
        >
          <DetailsLevel3
            title="Pasta Components"
            text="Nesta pasta temos um único componente utilizado para renderizar um formulário que cadastra as informações de um banner no banco de dados, 
            e também para mostrar os dados de um banner já existente."
          />
        </DetailsLevel2>

        <DetailsLevel2
          title="Pasta MeusAnuncios"
          text='Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar a página "Meus Anúncios" e direcionar 
          o usuário para as páginas de edição ou listagem dos anúncios desse usuário. Além disso possui outras duas pastas.'
        >
          <DetailsLevel3
            title="Pasta MeusAnunciosEdit"
            text='Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar a Edição de anúncios na página "Meus Anúncios".'
          />
          <DetailsLevel3
            title="Pasta MeusAnunciosList"
            text='Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar a listagem de anúncios na página "Meus Anúncios".'
          />
        </DetailsLevel2>

        <DetailsLevel2
          title="Pasta MeusBanners"
          text='Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar a página "Meus Banners" e direcionar 
          o usuário para as páginas de edição ou listagem dos banners desse usuário. Além disso possui outras duas pastas.'
        >
          <DetailsLevel3
            title="Pasta MeusBannersEdit"
            text='Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar a Edição de banners na página "Meus Banners".'
          />
          <DetailsLevel3
            title="Pasta MeusBannersList"
            text='Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar a listagem de banners na página "Meus Banners".'
          />
        </DetailsLevel2>

      </DetailsLevel1>
      
      <DetailsLevel1
        title="Pasta AnuncieAqui"
        text="Essa pasta contém dois arquivos, o principal nomeado como index.jsx é carregado ao importarmos a pasta e o index.css 
        utilizado para estilização. O componente index.jsx é responsável por renderizar a página de Anuncie Aqui."
      />

      <DetailsLevel1
        title="Pasta Anuncio"
        text="Essa pasta contém dois arquivos, o principal nomeado como index.jsx é carregado ao importarmos a pasta e o index.css 
        utilizado para estilização. O componente index.jsx é responsável por renderizar a página de um anuncio especifico 
        selecionado pelo usuário, nessa página o usuário tem acesso a todas as informações postas no anuncio pelo anunciante."
      />

      <DetailsLevel1
        title="Pasta Cadastro"
        text="Essa pasta contém dois arquivos, o principal nomeado como index.jsx é carregado ao importarmos a pasta e o index.css 
        utilizado para estilização. O componente index.jsx é responsável por renderizar a página de cadastro de um novo usuário."
      />       

      <DetailsLevel1
        title="Pasta Cotacao"
        text="Essa pasta contém dois arquivos, o principal nomeado como index.jsx é carregado ao importarmos a pasta e o index.css 
        utilizado para estilização. O componente index.jsx é responsável por renderizar a página de Cotação para que os usuários 
        preencham um formulário com suas especificações(formulário esse que só é disponível para usuários logados)."
      />

      <DetailsLevel1
        title="Pasta EsqueciMinhaSenha"
        text='Essa pasta contém dois arquivos, o principal nomeado como index.jsx é carregado ao importarmos a pasta e o index.css 
        utilizado para estilização. O componente index.jsx é responsável por renderizar a página "Esqueci Minha Senha".'
      />
      
      <DetailsLevel1
        title="Pasta GuiaDeEmpresas"
        text='Essa pasta contém dois arquivos, o principal nomeado como index.jsx é carregado ao importarmos a pasta e o index.css 
        utilizado para estilização. O componente index.jsx é responsável por renderizar a página "Esqueci Minha Senha".'
      >
        <DetailsLevel2
          title="Pasta Components"
          text="Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar a 
          página de criação de anúncios onde o anunciante encontra o formulário para cadastrar seu anúncio. Além disso também 
          possui uma pasta."
        >
          <DetailsLevel3
            title="Pasta FeaturedAdvertisementList"
            text="Nesta pasta temos um único componente utilizado para renderizar os anúncios certificados dentre aqueles filtrados pelo usuário, caso o usuário não tenha aplicado nenhum filtro mostrara todos os anúncios certificados. Caso não haja nenhum anúncio certificado, nada será renderizado na tela."
          />

          <DetailsLevel3
            title="Pasta PublicAdvertisementList"
            text="Nesta pasta temos um único componente utilizado para renderizar os anúncios dentre aqueles filtrados pelo usuário, caso o usuário não tenha aplicado nenhum filtro mostrara todos os anúncios. Caso não haja nenhum anúncio, nada será renderizado na tela."
          />

          <DetailsLevel3
            title="Pasta InRegionSaleAdvertisementList"
            text="Nesta pasta temos um único componente utilizado para renderizar os anúncios com desconto localizados na mesma região que o usuário. 
            Caso o usuário não tenha informado sua localização quando se cadastrou, nada será renderizado na tela."
          />
        </DetailsLevel2>
      </DetailsLevel1>

      <DetailsLevel1
        title="Pasta Home"
        text="Essa pasta contém um arquivo nomeado como index que é carregado ao importarmos a pasta. O componente dentro de index 
        é responsavel por renderizar a página principal da aplicação."
      />

      <DetailsLevel1
        title="Pasta Login"
        text="Essa pasta contém dois arquivos, o principal nomeado como index.jsx é carregado ao importarmos a pasta e o index.css 
        utilizado para estilização. O componente index.jsx é responsável por renderizar a página de Login."
      />
      
      <DetailsLevel1
        title="Pasta Materia"
        text="Essa pasta contém dois arquivos, o principal nomeado como index.jsx é carregado ao importarmos a pasta e o index.css 
        utilizado para estilização. O componente index.jsx é responsável por renderizar a página que contém uma matéria 
        publicada por um usuário."
      />
      
      <DetailsLevel1
        title="Pasta Materias"
        text="Essa pasta contém um arquivo e uma pasta, o arquivo nomeado como index.jsx é carregado ao importarmos a pasta. Sendo 
        esse arquivo responsável por renderizar a página onde é possível ver selecionar todas as matérias escritas do site 
        e filtrá-las."
      >
        <DetailsLevel2
          title="MateriasList"
          text="Essa pasta contém um arquivo, que é carregado ao importarmos a pasta. Sendo responsável por devolver uma lista 
          de matérias baseado nos parâmetros passados e mostrar um resultado na tela."
        />
      </DetailsLevel1>

      <DetailsLevel1
        title="Pasta MinhasCotacoes"
        text="Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar 
        as cotações do usuário, caso ele não tenha será renderizado uma mensagem para o usuário."
      />
      
      <DetailsLevel1
        title="Pasta NoMatchPage"
        text="Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar 
        uma página de erro padrão que será mostrada toda vez que o usuário tentar buscar por uma URL inexistente no site."
      />

      <DetailsLevel1
        title="Pasta Perfil"
        text="Essa pasta contém um arquivo, carregado ao importarmos a pasta. Esse arquivo é responsável por renderizar 
        o perfil do usuário onde ele pode visualizar e alterar suas informações pessoais."
      >
        <DetailsLevel2
          title="components"
          text="Essa pasta contém componentes de uso exclusivo da página de perfil do usuário."
        >
          <DetailsLevel3
            title="DeleteUserModal"
            text="Componente voltado para deletar a conta do usuário do banco de dados do site. Abre um modal para o usuário 
            confirmar seu comando."
          />

          <DetailsLevel3
            title="UserForm"
            text="Componente que renderiza o formulário com as informações do usuário já inserida, podendo 
            esse usuário alterar ou apenas visualizar essas informações."
          />
        </DetailsLevel2>
      </DetailsLevel1>

    </div>
  )
}