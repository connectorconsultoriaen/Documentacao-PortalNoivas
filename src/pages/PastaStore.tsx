import { DetailsLevel1, DetailsLevel2 } from "../components/DetailsElements";

export function PastaStore () {
  return (
    <div className='py-7 w-full'>

      <p>
        As pastas e arquivos listados abaixo estão na pasta Store. Está pasta possui um arquivo index.js que é chamado quando a importamos, sem identificar um arquivo ou pasta especifica. 
      </p>

      <DetailsLevel1
        title="Actions"
        text="Essa pasta contém todas as actions(ações) da aplicação. Que serão passadas para os reducers."
      >
        <DetailsLevel2 
          title="Advertisement"
          text="Este componente realiza requisições a API para manipular os Anúncios definidos pelos usuários anunciantes e administrador, podendo adicionar, listar, aprovar ou deletar um anúncio. Após fazer uma dessas requisições retorna uma action para a Store definir/atualizar um estado(state) do Reducer responsável pelos anúncios da aplicação."
          importations={["../../../apis", "../types", "react-toastify"]}
        />

        <DetailsLevel2 
          title="Article"
          text="Este componente realiza requisições a API para manipular as Matérias definidos pelos usuários anunciantes e administrador, podendo adicionar, listar, aprovar ou deletar uma matéria. Após fazer uma dessas requisições retorna uma action para a Store definir/atualizar um estado(state) do Reducer responsável pelos artigos da aplicação."
          importations={["../../../apis", "../types", "react-toastify"]}
        />
        
        <DetailsLevel2 
          title="Auth"
          text="Este componente realiza requisições a API para autentificar o usuário e atualizar seus status de logado para deslogado ou vice-versa. Também realiza as requisições de resetar senha e enviar email de verificação. Após fazer uma dessas requisições retorna uma action para a Store definir/atualizar um estado(state) do Reducer responsável pela autentificação de usuário da aplicação."
          importations={['../../../apis', "../types", 'react-toastify', "jwt-decode"]}
        />

        <DetailsLevel2 
          title="Banner"
          text="Este componente realiza requisições a API para manipular os Banners definidos pelos usuários anunciantes e pelo administrador, podendo adicionar, listar, atualizar, aprovar, bloquear ou deletar um banner. Após fazer uma dessas requisições retorna uma action para a Store definir/atualizar um estado(state) do Reducer responsável pelos banners da aplicação."
          importations={["../../../apis", "../types", "react-toastify"]}
        />

        <DetailsLevel2 
          title="Category"
          text="Este componente realiza requisições a API para manipular as Categorias e Subcategorias definidas pelo usuário administrador, podendo adicionar, listar, atualizar e bloquear uma categorias ou subcategoria. Após fazer uma dessas requisições retorna uma action para a Store definir/atualizar um estado(state) do Reducer responsável pelas categorias e subcategorias da aplicação."
          importations={["../../../apis", "../types", "react-toastify"]}
        />
        
        <DetailsLevel2 
          title="File"
          text="Este Componente realiza requisições a API para armazenar e pegar arquivos de imagem no back-end."
          importations={["../../../apis", "../types", "react-toastify"]}
        />

        <DetailsLevel2 
          title="Location"
          text="Este componente realiza requisições a API para manipular os Locais(regiões) que a empresa presta serviços, são definidos pelo usuário administrador, podendo adicionar, listar, atualizar e remover uma localização. Após fazer uma dessas requisições retorna uma action para a Store definir/atualizar um estado(state) do Reducer responsável pelas localizações da aplicação."
          importations={["../../../apis", "../types", "react-toastify"]}
        />

        <DetailsLevel2 
          title="Menu"
          text="Componente que retorna uma action para a Store definir/atualizar o estado(state) do Reducer responsável pelo Menu da aplicação."
          importations={["../types"]}      
        />

        <DetailsLevel2 
          title="Modal"
          text="Componente que retorna uma action para a Store definir/atualizar o estado(state) do Reducer responsável pelo Modal da aplicação."
          importations={["../types",]}
        />

        <DetailsLevel2 
          title="Quotation"
          text="Este componente realiza requisições a API para manipular as cotações definidas pelo usuário administrador, podendo adicionar, listar, atualizar e remover uma cotação. Após fazer uma dessas requisições retorna uma action para a Store definir/atualizar um estado(state) do Reducer responsável pelas cotações da aplicação."
          importations={["../../../apis", "../types", "react-toastify"]}
        />

        <DetailsLevel2 
          title="User"
          text="Este componente realiza requisições a API para manipular os Usuários da aplicação, podendo adicionar, listar, atualizar e remover um usuário. Após fazer uma dessas requisições retorna uma action para a Store definir/atualizar um estado(state) do Reducer responsável pelas cotações da aplicação."
          importations={["../../../apis", "../types", "react-toastify"]}
        />

        <DetailsLevel2 
          title="Types.js"
          text="Arquivo que define e armazena as variaveis de actions(ações) que são usadas tanto pelos componentes desta pasta quanto pelos componentes da pasta 
          Reducers."
        />
      </DetailsLevel1>

      <DetailsLevel1 
        title="Actions_Mockup"
        text="
          Essa pasta é uma cópia da pasta 'actions', possuindo todos os arquivos e pastas da mesma. Criada exclusivamente para testar funcionalidades caso a conexão com o banco não esteja disponível durante o desenvolvimento.
        "
      />

      <DetailsLevel1 
        title="Reducers" 
        text="Essa pasta contém todos os reducers da aplicação."
      >
        <DetailsLevel2
          title="Index.js"
          text="Arquivo importado automaticamente quando importamos apenas a pasta 'reducers'. Este arquivo combina todos os Reducers 
          da pasta em um único objeto para podermos exportar todos juntos para o index.js da pasta Store onde serão compartilhados para toda a aplicação."
          importations={[
            "@reduxjs/toolkit", 
            "./authReducer", 
            "./menuReducer",
            "./modalReducer",
            "./userReducer", 
            "./advertisementReducer", 
            "./categoryReducer", 
            "./locationReducer",
            "./quotationReducer", 
            "./articleReducer",
            "./bannerReducer"
          ]}
        />

        <DetailsLevel2 
          title="AdvertisementReducer"
          text="Componente que com base na action passada para ele, executa uma ação modificando seu estado inicial. Caso seja passada uma action que não era esperada, ela será 
          ignorada e nada será feito. Este Reducer armazena os anúncios da aplicação que chegam do back-end e os gerencia."
          importations={['lodash', '../actions/types']}
        />

        <DetailsLevel2 
          title="ArticleReducer"
          text="Componente que com base na action passada para ele, executa uma ação modificando seu estado inicial. Caso seja passada uma action que não era esperada, ela será 
          ignorada e nada será feito. Este Reducer armazena os artigos da aplicação que chegam do back-end e os gerencia."
          importations={['lodash', '../actions/types']}
        />

        <DetailsLevel2 
          title="AuthReducer"
          text="Componente que com base na action passada para ele, executa uma ação modificando seu estado inicial. Caso seja passada uma action que não era esperada, ela será 
          ignorada e nada será feito. Este Reducer armazena o usuário da aplicação que chega do back-end e os gerencia."
          importations={['../actions/types']}
        />

        <DetailsLevel2 
          title="BannerReducer"
          text="Componente que com base na action passada para ele, executa uma ação modificando seu estado anterior. Caso seja passada uma action que não era esperada, ela será 
          ignorada e nada será feito. Este Reducer armazena os banners da aplicação que chegam do back-end e os gerencia."
          importations={['lodash', '../actions/types']}
        />

        <DetailsLevel2 
          title="CategoryReducer"
          text="Componente que com base na action passada para ele, executa uma ação modificando seu estado anterior. Caso seja passada uma action que não era esperada, ela será 
          ignorada e nada será feito. Este Reducer armazena as categorias e subcategorias da aplicação que chegam do back-end e os gerencia."
          importations={['lodash', '../actions/types']}
        />

        <DetailsLevel2 
          title="LocationReducer"
          text="Componente que com base na action passada para ele, executa uma ação modificando seu estado anterior. Caso seja passada uma action que não era esperada, ela será 
          ignorada e nada será feito. Este Reducer armazena as localizações da aplicação que chegam do back-end e os gerencia."
          importations={['lodash', '../actions/types']}
        />

        <DetailsLevel2 
          title="MenuReducer"
          text="Componente que com base na action passada para ele, executa uma ação modificando seu estado anterior. Caso seja passada uma action que não era esperada, ela será 
          ignorada e nada será feito. Este Reducer define se o Menu está aberto ou fechado na aplicação."
          importations={['../actions/types']}
        />

        <DetailsLevel2 
          title="ModalReducer"
          text="Componente que com base na action passada para ele, executa uma ação modificando seu estado anterior. Caso seja passada uma action que não era esperada, ela será 
          ignorada e nada será feito. Este Reducer define se o Modal está aberto ou fechado na aplicação."
          importations={['../actions/types']}
        />

        <DetailsLevel2 
          title="QuotationReducer"
          text="Componente que com base na action passada para ele, executa uma ação modificando seu estado anterior. Caso seja passada uma action que não era esperada, ela será 
          ignorada e nada será feito. Este Reducer armazena as cotações do usuário que chegam do back-end e os gerencia."
          importations={['lodash', '../actions/types']}
        />

        <DetailsLevel2 
          title="UserReducer"
          text="Componente que com base na action passada para ele, executa uma ação modificando seu estado anterior. Caso seja passada uma action que não era esperada, ela será 
          ignorada e nada será feito. Este Reducer armazena os usuários que chegam do back-end e os gerencia."
          importations={['lodash', '../actions/types']}
        />
      </DetailsLevel1>

      <DetailsLevel1 
        title="Index.js"
        text="
          Nesse arquivo juntamos todos os reducers criados(utilizando a biblioteca Redux) para definirmos a store e através dela, compartilhar os reducers para toda a aplicação. 
        "
        importations={['@reduxjs/toolkit', './reducers']}
      />
    </div>
  )
}