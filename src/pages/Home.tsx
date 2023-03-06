import { Link } from "react-router-dom";
import { DetailsLevel1, DetailsLevel2 } from "../components/DetailsElements";

export function Home () {

  return (      
    <div className='pt-7'>
      
      <p>
        Site criado para documentação do Projeto Portal Noivas. Aqui você encontrará a descrição de 
        todos os arquivos e pastas do projeto.  
      </p>

      <DetailsLevel1 
        title='Pasta Public'
        text="Aqui temos todos os arquivos que são públicos na aplicação, ou seja, que serão acessados quando a aplicação estiver rodando na internet."
      >
        <DetailsLevel2 
          title='index.html'
          text='Arquivo HTML que será o primeiro a carregar quando  a aplicação executar, é nesse arquivo base que o React vai utilizar para criar todo o conteúdo visual da aplicação.'
        />
        <DetailsLevel2 
          title='Banner.png'
          text='Arquivo de imagem utilizado como banner na página principal do portal noivas.'
        />
        <DetailsLevel2 
          title='Logo.png'
          text='Arquivo de imagem utilizado como logo no header da página do portal noivas.'
        />
        <DetailsLevel2 
          title='icon.svg'
          text='Arquivo de svg utilizado no como icone mostrado no navegador quando o usúario estiver na página do portal noivas.'
        />
        <DetailsLevel2 
          title='Manifest.json'
          text='O manifesto da aplicação web fornece informação sobre uma aplicação (como nome, autor, ícone, e 
            descrição) num arquivo de texto JSON. O objetivo do manifest.json é instalar aplicações web na tela 
            inicial de um dispositivo, proporcionando aos utilizadores um acesso rápido e uma experiência rica.'
        />
        <DetailsLevel2 
          title='Roboto.txt'
          text='É usado para instruir os robôs/spiders utilizados pelos mecanismos de buscas (como Google e Bing)
          a como rastrear e indexar as páginas de seu site.'
          link="https://handson-ti.com.br/para-que-serve-o-robots-txt/#:~:text=txt%3F-,Robot.,as%20p%C3%A1ginas%20de%20seu%20site."
        />
        <DetailsLevel2 
          title='Banner2.jfif'
          text='Arquivo de imagem utilizado como outra versão de banner nas páginas secundárias do portal noivas.'
        />
      </DetailsLevel1>

      <DetailsLevel1
        title="Pasta SRC"
        text="Aqui temos todos os arquivos que desenvolvemos como componentes, páginas da aplicação, hooks, 
        rotas dentre outros. Por ser muito conteúdo clique no link abaixo para mais informações."
        link="/Documentacao-PortalNoivas/PastaSRC"
      />

      <DetailsLevel1
        title=".gitignore"
        text="Este arquivo de texto diz ao Git quais arquivos ou pastas ele deve ignorar em um projeto."
      />

      <DetailsLevel1
        title="package-lock.json"
        text="O package-lock.json é uma larga lista de dependências listadas no seu package.json, além de especificar 
        a versão exata que deve ser instalado, a localização do módulo (URI), o hash que verifica a integridade
        do módulo e a lista de pacotes necessários."
        link="https://medium.com/devzera/tudo-que-voc%C3%AA-queria-saber-sobre-o-package-lock-json-mas-estava-com-vergonha-de-perguntar-e70589f2855f"
      />

      <DetailsLevel1
        title="package.json"
        text="Este arquivo é utilizado para guardar nossos scripts (comandos), bibliotecas, dependências dentre 
        outras informações como nome do projeto, versão e etc."
      />

      <DetailsLevel1
        title="README.md"
        text="Arquivo utilizado pelo GitHub para mostrar o conteúdo deste arquivo como a descrição 
        do projeto na plataforma do GitHub."
      />
    </div>
  )
}