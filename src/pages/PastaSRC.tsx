import { DetailsLevel1, DetailsLevel2 } from '../components/DetailsElements';

export function PastaSRC () {
  return (        
    <div className='py-7 w-full'>

      <p>Todas as pastas e arquivos listados abaixo estão dentro da pasta SRC</p>

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
            Arquivo javascript que faz a conexão com o banco de dados utilizando a biblioteca axios.
          '
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
        text='Nesta pasta temos hooks personalizados criados, a partir de hooks já existentes, expecificamente para 
        atender as necessidades do projeto.'
      >
        <DetailsLevel2 
          title='useMenu.js'
          text='Esse hook foi criado para controlarmos o Menu, verificando se ele está aberto ou fechado, para caso esteja aberto 
          possamos fecha-lo e vice-versa.
          '
        />
        <DetailsLevel2 
          title='useModal.js'
          text='Arquivo javascript...'
        />
        <DetailsLevel2 
          title='usePageSelection.js'
          text='Arquivo javascript...'
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
        />
        <DetailsLevel2 
          title='routes.js'
          text='Arquivo no qual configuramos todas as rotas(caminhos) da nossa aplicação utilizando a biblioteca do "react-router-dom". 
          Para alterar as informações contidas aqui é importante ter o conhecimento intermediario da biblioteca utilizada.'
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
      />

      <DetailsLevel1
        title='Index.js'
        text='Arquivo que faz a conexão do nosso arquivo app.jsx com nosso html. Renderizando nosso conteúdo, 
        definindo o historico e habilitando os arquivos da nossa pasta Store em toda a aplicação.'
      /> 
    </div>
  )
}