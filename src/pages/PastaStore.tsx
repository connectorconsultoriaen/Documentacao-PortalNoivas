import { DetailsLevel1, DetailsLevel2 } from "../components/DetailsElements";

export function PastaStore () {
  return (
    <div className='py-7 w-full'>

      <p>
        Todas as pastas e arquivos listados abaixo estão na pasta Store. Está pasta possui um arquivo index.js que é chamado quando a importamos, sem identificar um arquivo ou pasta especifica. É nesse arquivo que juntamos todos os reducers criados(utilizando a biblioteca Redux) para definirmos a store e através dela, compartilhar os reducers para toda a aplicação.  
      </p>

      <DetailsLevel1
        title="Actions"
        text="Essa pasta contém todas as actions(ações) da aplicação. Que serão passadas para os reducers."
      >
        <DetailsLevel2 
          title="Advertisement"
        />

        <DetailsLevel2 
          title="Article"
        />
        
        <DetailsLevel2 
          title="Auth"
        />

        <DetailsLevel2 
          title="Banner"
        />

        <DetailsLevel2 
          title="Category"
        />
        
        <DetailsLevel2 
          title="File"
        />

        <DetailsLevel2 
          title="Location"
        />

        <DetailsLevel2 
          title="Menu"
        />

        <DetailsLevel2 
          title="Modal"
        />

        <DetailsLevel2 
          title="Quotation"
        />

        <DetailsLevel2 
          title="User"
        />

        <DetailsLevel2 
          title="Types.js"
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
        />

        <DetailsLevel2 
          title="AdvertisementReducer"
          text=""
        />

        <DetailsLevel2 
          title="ArticleReducer"
          text=""
        />

        <DetailsLevel2 
          title="AuthReducer"
          text=""
        />

        <DetailsLevel2 
          title="BannerReducer"
          text=""
        />

        <DetailsLevel2 
          title="CategoryReducer"
          text=""
        />

        <DetailsLevel2 
          title="LocationReducer"
          text=""
        />

        <DetailsLevel2 
          title="MenuReducer"
          text=""
        />

        <DetailsLevel2 
          title="ModalReducer"
          text=""
        />

        <DetailsLevel2 
          title="QuotationReducer"
          text=""
        />

        <DetailsLevel2 
          title="UserReducer"
          text=""
        />
      </DetailsLevel1>
    </div>
  )
}