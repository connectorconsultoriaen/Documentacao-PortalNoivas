import { DetailsLevel1, DetailsLevel2, DetailsLevel3 } from "../components/DetailsElements";

export function PastaComponents () {

  return (
    <div className='py-7 w-full'>

      <p>Todas as pastas e arquivos listados abaixo estão dentro da pasta Components.</p>

      <DetailsLevel1
        title="Pasta Admin"
        text="Essa pasta guarda os componentes que criam funcionalidades exclusivas de usuários administradores."
      >
        <DetailsLevel2
          title="Pasta Menu"
          text="Essa pasta armazena os componentes que criam o menu dos usuários administradores."
        >
          <DetailsLevel3 
            title="AdminSideBarMenu"
            text="Componente que constrói um menu com as funcionalidades que o usuário administrador pode acessar. 
            Se utiliza do componente MenuItem para criar cada uma das rotas para as funcionalidades 
            disponíveis."
            importations={[
              'react',
              'react-router-dom',
              'react-redux',
              '../../../store/actions/auth',
              './MenuItem'
            ]}
          />
          <DetailsLevel3 
            title="MenuItem"
            text="Componente criado para evitar repetição de código e para estilização."
            importations={['react', 'react-router-dom']}
          />
        </DetailsLevel2>

        <DetailsLevel2 title="Pasta Table">
          <DetailsLevel3 
            title="ItemsPerPage"
            text="Componente códificado para melhor experiência do usúario e controle da paginação, ele mostra 
            os items por página e quantas páginas existem."
            importations={['react', 'react-router-dom', 'semantic-ui-react', '../../../hooks/usePageSelection']}
          />
          <DetailsLevel3 
            title="Pagination"
            text="Esse componente implementa a função de paginação na aplicação (sem uso de biblioteca)."
            importations={['react', 'react-router-dom', '../../../hooks/usePageSelection']}

          />
          <DetailsLevel3 
            title="Table"
            text="Esse componente renderiza uma Tabela genérica que recebe como parâmetro os campos, os dados e as ações 
            do registro."
            importations={['react']}
          />
        </DetailsLevel2>

        <DetailsLevel2
          title="Filters"
          text="Componente utilizado para filtrar conteúdo dentro da aplicação, como artigos por exemplo."
          importations={['react', 'react-final-form', 'react-router-dom', '../form/Radio']}
        />
        <DetailsLevel2
          title="Header"
          text="Componente que renderiza um título e subtitulo para descrever a funcionalidade oferecida pela 
          página a qual for inserido."
        />
      </DetailsLevel1>

      <DetailsLevel1
        title="Pasta Form"
        text='Nesta pasta temos componentes que renderizam, um elemento de formulário utilizando a biblioteca "react-final-form" 
        em sua maioria. Porém temos a utilização de outras bibliotecas também.'
      >
        <DetailsLevel2
          title="Checkbox"
          text="Componente que renderiza um Checkbox."
        />
        <DetailsLevel2
          title="Condition"
          text="Componente que renderiza o conteúdo dentro dele (podendo ser ou não outro componente), caso 
          a condição imposta seja válida."
          importations={['react', 'react-final-form']}
        />
        <DetailsLevel2
          title="CustomField"
          text='Códificado para customizar o comportamento do componente "Field" da biblioteca "react-final-form" para 
          termos controle do novo comportamento "OnChange".'
          importations={['react', 'react-final-form']}
        />
        <DetailsLevel2
          title="DatePicker"
          text='Componente que utiliza a biblioteca "react-datepicker" e "date-fns" para renderizar um input que permite o 
          usuário abrir um calendário no qual possa escolher uma data específica com ano, mês e dia.'
          importations={['react', 'react-datepicker', 'react-datepicker/dist/react-datepicker.css', 'date-fns', 'date-fns/locale/pt-BR']}
        />
        <DetailsLevel2
          title="Input"
          text="Componente que renderiza um input padrão."
        />
        <DetailsLevel2
          title="Radio"
          text="Componente que renderiza um input do tipo radio."
        />
        <DetailsLevel2
          title="Select"
          text="Componente que renderiza um input de seleção de múltiplas escolhas, ou apenas uma, dentre as escolhas disponíveis."
        />
      </DetailsLevel1>

      <DetailsLevel1
        title="AnuncioCard"
        text="Um componente que renderiza um anúncio na aplicação. Esse anúncio é criado por usuário anunciante e aprovado 
        pelo administrador do site Portal Noiva."
        importations={['react', 'react-router-dom', '../store/actions/advertisement', '../store/actions/file']}
      />
 
      <DetailsLevel1
        title="ArticleCard"
        text="Um componente que renderiza um artigo dentro da aplicação. Esse artigo possui a data de publicação e 
        mostra o número de visualizações."
        importations={['react', 'react-router-dom', '../store/actions/file']}
      />

      <DetailsLevel1
        title="BannerCard"
        text="Um componente que renderiza um Banner na aplicação. Esse banner é criado por um terceiro que 
        tem interesse de anunciar o seu negócio no site Portal Noiva."
        importations={['react', 'react-router-dom', '../store/actions/file']}
      />     

      <DetailsLevel1
        title="FeaturedCategoryCard"
        text="Um componente que renderiza um card com as informação da categoria que lhe for passada."
        importations={['react', '../store/actions/file']}

      />

      <DetailsLevel1
        title="Footer"
        text="Um componente que cria o rodapé da aplicação. "
        importations={['react', 'react-router-dom']}

      />

      <DetailsLevel1
        title="Masthead"
        text="Este componente cria uma aba de navegação na aplicação para permitir o usuário comum e o usuário logado 
        a navegaram pelas páginas disponíveis para eles respeitando o nível de acesso que cada um possui."
        importations={['react', 'react-redux', 'react-router-dom', '../store/actions/file']}
      />

      <DetailsLevel1
        title="Publicidade"
        text="Esse componente lista todos os banners da aplicação que batem com os requisitos de busca, são esses 
        requisitos: categoria, tipo, local, etc. Chama o componente PublicidadeBanner.jsx para renderizar cada
        banner encontrados."
        importations={['react', 'react-redux', '../store/actions/banner', './PublicidadeBanner']}
      />
      
      <DetailsLevel1
        title="PublicidadeBanner"
        text="Esse componente é responsavel por mostrar na tela as informações do banner que lhe foi passado pelo 
        componente Publicidade.jsx."
        importations={['react', '../store/actions/file']}
      />

      <DetailsLevel1
        title="RequireAuth"
        text="Esse componente é responsavel por realizar a autentificação do usuário no site. Permitindo assim que 
        ele acesse as funcionalidades reservadas a usuários logados. Esse componente é chamado no arquivo routes.js localizado na pasta 
        routes. Para realizar a autentificação antes de redirecionar o usuário a determinada página."
        importations={['react-redux', 'react-router-dom']}
      />

      <DetailsLevel1
        title="ScrollToTop"
        text="Esse componente é chamado toda vez que mudamos de página(url) no projeto, ele serve para mover a 
        página para topo, pois isso não acontece automaticamente."
        importations={['react', 'react-router-dom']}
      />

      <DetailsLevel1
        title="SideBarMenu"
        text="Esse componente cria um menu lateral na tela exibindo opções de navegação para o usúario. Além disso 
        também controla quando este menu abre e fecha na tela."
        importations={['react', 'react-router-dom', 'react-redux', '../routes/history', '../store/actions/menu', '../store/actions/auth']}
      />

    </div>
  )
}