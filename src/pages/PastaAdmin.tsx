import { DetailsLevel1, DetailsLevel2, DetailsLevel3 } from "../components/DetailsElements";

export function PastaAdmin() {
  
  return (
    <div className="py-7 w-full">

      <p>Todas as pastas e arquivos listados abaixo estão dentro da pasta Admin.</p>
    
      <DetailsLevel1 
        title="Pasta Advertisements" 
        text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos.
        O componente renderizado pelo index.jsx é responsável por mostrar a seção de anúncios do painel de controle do usuário administrador. Este componente também gerencia as 
        rotas desta seção."
        importations={[
          'react',
          'react-router-dom',
          '../../../components/admin/Header',
        ]}
      >
        <DetailsLevel2
          title="AdvertisementCreate"
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. 
          O componente renderizado pelo index.jsx é responsável por mostrar na seção de anúncio o formulário de criação de anúncios."        
          importations={[
            'react',
            'react-router-dom',
            'react-redux',
            '../../../advertiser/CriarAnuncio/components/AdvertisementForm',
            '../../../../store/actions/advertisement',
          ]}
        />

        <DetailsLevel2
          title="AdvertisementEdit"
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. 
          O componente renderizado pelo index.jsx é responsável por mostrar na seção de anúncio o formulário para edição de um anúncio já existente ou apenas visualização do seu conteúdo."        
          importations={[
            'react',
            'react-router-dom',
            'react-redux',
            'format-string-by-pattern',
            '../../../advertiser/CriarAnuncio/components/AdvertisementForm',
            '../../../../store/actions/advertisement'
          ]}
        />

        <DetailsLevel2
          title="AdvertisementList"
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. 
          O componente renderizado pelo index.jsx é responsável por mostrar na seção de anúncio a listagem de todos os anúncios, aqui o usuário administrador pode aprovar 
          ou bloquear anúncios."        
          importations={[
            'react',
            'react-redux',
            'react-router-dom',
            './components/AllAdvertisementList',
            '../../../../store/actions/advertisement'
          ]}
        >
          <DetailsLevel3
            title="components"
            text="Essa pasta possui uma única pasta com um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o 
            arquivo/pastas que queremos. O componente renderizado pelo index.jsx é responsável por mostrar uma tabela com todos os anúncios, caso ocorra algum erro 
            será mostrado uma mensagem de erro no lugar da tabela."
            importations={[
              'react',
              'react-router-dom',
              'react-redux',
              '../../../../../../components/admin/table/Pagination',
              '../../../../../../components/admin/table/ItemsPerPage',
              '../../../components/AdminDeleteAdvertisementModal',
              '../../../components/AdminAdvertisementFilters',
              '../../../../../../hooks/useModal',
              '../../../../../../store/actions/advertisement',
            ]}
          />
        </DetailsLevel2>

        <DetailsLevel2
          title="Pasta Components"
          text="Essa pasta possui componentes especificos que só são utilizados na pasta Advertisements."        
        >
          <DetailsLevel3 
            title="AdminAdvertisementFilters"
            text="Componente que aplica um filtro nos anúncios listados."
            importations={[
              'react',
              'react-final-form',
              '../../../../components/admin/Filters',
              '../../../../components/form/Condition',
              '../../../../components/form/Select'
            ]}
          />

          <DetailsLevel3 
            title="AdminDeleteAdvertisementModal"
            text="Componente que renderiza um pop-up pedindo a confirmação do usuário para deletar/desabilitar um anúncio. Caso ocorra algum erro, um pop-up especificando o erro aparecera na tela."
            importations={[
              'react',
              'semantic-ui-react',
              'react-redux',
              '../../../../hooks/useModal',
              '../../../../store/actions/advertisement',
            ]}
          />
        </DetailsLevel2>
      </DetailsLevel1>

      <DetailsLevel1 
        title="Pasta ArticleCategories" 
        text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos.
        O componente renderizado pelo index.jsx é responsável por mostrar a seção de categorias das matérias do painel de controle do usuário administrador. Este componente também gerencia as rotas desta seção."
        importations={[
          'react',
          'react-router-dom',
          '../../../components/admin/Header',
        ]}  
      >

        <DetailsLevel2
          title="ArticleCategoryCreate"
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. 
          O componente renderizado pelo index.jsx é responsável por mostrar na seção de Categorias de matérias o formulário para criação categorias."
          importations={[
            'react',
            'react-router-dom',
            'react-redux',
            '../components/AdminArticleCategoryForm',
            '../../../../store/actions/category',
          ]}
        />

        <DetailsLevel2
          title="ArticleCategoryEdit"
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. 
          O componente renderizado pelo index.jsx é responsável por mostrar na seção de Categorias de matérias o formulário para editar uma categoria já existente ou apenas visualização do seu conteúdo."
          importations={[
            'react',
            'react-router-dom',
            'react-redux',
            '../components/AdminArticleCategoryForm',
            '../../../../store/actions/category',
          ]}
        />

        <DetailsLevel2
          title="ArticleCategoryList"
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. 
          O componente renderizado pelo index.jsx é responsável por mostrar na seção de Categorias de matérias todas as categorias e subcategorias, exibindo também opções de 
          criar e deletar ambas."
          importations={[
            'react',
            'react-router-dom',
            'react-redux',
            'lodash',
            '../../config',
            '../../../../components/admin/table/Table',
            '../../../../components/admin/table/Pagination',
            '../components/AdminDeleteArticleCategoryModal',
            '../../../../hooks/useModal',
            '../../../../store/actions/category',
          ]}
        />

        <DetailsLevel2
          title="ArticleSubCategoryCreate"
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. 
          O componente renderizado pelo index.jsx é responsável por mostrar na seção de Categorias de matérias o formulário para criação de uma subcategorias."
          importations={[
            'react',
            'react-router-dom',
            'react-redux',
            '../components/AdminArticleSubCategoryForm',
            '../../../../store/actions/category',
          ]}
        />

        <DetailsLevel2
          title="ArticleSubCategoryEdit"
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. 
          O componente renderizado pelo index.jsx é responsável por mostrar na seção de Categorias de matérias o formulário para editar uma subcategoria já existente ou apenas visualização do seu conteúdo."
          importations={[
            'react',
            'react-router-dom',
            'react-redux',
            '../components/AdminArticleSubCategoryForm',
            '../../../../store/actions/category',
          ]}
        />

        <DetailsLevel2
         title="Pasta Components"
         text="Essa pasta possui componentes especificos que só são utilizados na pasta ArticleCategories."
        >
          <DetailsLevel3
            title="AdminArticleCategoryFilters"
            text="Componente que aplica um filtro nas categorias listadas."
            importations={[
              'react',
              'react-final-form',
              '../../../../components/admin/Filters',
              '../../../../components/form/Condition',
              '../../../../components/form/Input'    
            ]}
          />

          <DetailsLevel3
            title="AdminArticleCategoryForm"
            text="Componente que renderiza um formulário para a criação de categorias de matérias, também usado para edição das mesmas."
            importations={[
              'react',
              'react-final-form',
              '../../../../components/form/Input'    
            ]}
          />

          <DetailsLevel3
            title="AdminArticleSubCategoryForm"
            text="Componente utilizado para pesquisar uma subcategoria."
            importations={[
              'react',
              'react-redux',
              'react-final-form',
              '../../../../components/form/Input',    
              '../../../../components/form/Select',
              '../../../../store/actions/category',
            ]}
          />

          <DetailsLevel3
            title="AdminDeleteArticleCategoryModal"
            text="Componente  renderiza um pop-up pedindo a confirmação do usuário para deletar/desabilitar uma categoria ou subcategoria. Caso ocorra algum erro com a categoria passada, um pop-up especificando o erro aparecera na tela."
            importations={[
              'react',
              'semantic-ui-react',
              'react-redux',
              '../../../../hooks/useModal',
              '../../../../store/actions/category',    
            ]}
          />
        </DetailsLevel2>
      </DetailsLevel1>

      <DetailsLevel1 
        title="Pasta Articles" 
        text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos.
        O componente renderizado pelo index.jsx é responsável por mostrar a seção de matérias do painel de controle do usuário administrador. Este componente também gerencia as rotas desta seção."
        importations={[
          'react',
          'react-router-dom',
          '../../../components/admin/Header',
        ]} 
      >
        <DetailsLevel2
          title="ArticleCreate"
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. 
          O componente renderizado pelo index.jsx é responsável por mostrar na seção de matérias o formulário para criação de matérias."
          importations={[
            'react',
            'react-router-dom',
            'react-redux',
            '../components/AdminArticleForm',
            '../../../../store/actions/article',
          ]}
        />

        <DetailsLevel2
          title="ArticleEdit"
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. 
          O componente renderizado pelo index.jsx é responsável por mostrar na seção de matérias o formulário para edição de uma matéria já existente ou apenas visualização do seu conteúdo."
          importations={[
            'react',
            'react-router-dom',
            'react-redux',
            '../components/AdminArticleForm',
            '../../../../store/actions/article',
          ]}
        />

        <DetailsLevel2
          title="ArticleList"
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. 
          O componente renderizado pelo index.jsx é responsável por mostrar na seção de matérias todas as matérias, exibindo também a opção de criar e deletar uma matéria."
          importations={[
            'react',
            'react-router-dom',
            'react-redux',
            '../../../../components/admin/table/Pagination',
            '../components/AdminDeleteArticleModal',
            '../components/AdminArticleFilters',
            '../../../../components/admin/table/ItemsPerPage',
            '../../../../hooks/useModal',
            '../../../../store/actions/article'
          ]}
        />

        <DetailsLevel2
          title="Pasta Components"
          text="Essa pasta possui componentes especificos que são utilizados na pasta Articles."
        >
          <DetailsLevel3
            title="Pasta RichTextEditor"
            text="Essa pasta possui dois arquivos, um para estilização chamado index.css e outro chamado index.jsx que é um componente importado ao exportarmos apenas está pasta sem especificar o arquivo. O index.jsx é responsável por renderizar um bloco de texto editável para o usuário poder escrever textos personalizáveis podendo criar uma Matéria ou Anúncio."
            importations={[
              'react',
              'draft-js',
              './index.css',
              '../../../../../../node_modules/draft-js/dist/Draft.css',
            ]}
          />

          <DetailsLevel3
            title="AdminArticleFilters"
            text="Componente que aplica um filtro nas matérias listadas."
            importations={[
              'react',
              'react-final-form',
              '../../../../components/admin/Filters',
              '../../../../components/form/Condition',
              '../../../../components/form/Input',
            ]}
          />

          <DetailsLevel3
            title="AdminArticleForm"
            text="Componente que renderiza um formulário para a criação de matérias, também usado para edição das mesmas, nele definimos a categoria da matéria, seu conteúdo textual e imagens ilustrativas."
            importations={[
              'react',
              'react-redux',
              'react-final-form',
              'draft-js',
              '../../../../components/form/Input',
              '../../../../components/form/Select',
              '../../../../store/actions/category',
              '../../../../store/actions/file',
              '../components/RichTextEditor',
              '../../../../utils',
            ]}
          />

          <DetailsLevel3
            title="AdminDeleteArticleModal"
            text="Componente que renderiza um pop-up pedindo a confirmação do usuário para deletar/desabilitar uma matéria. Caso ocorra algum erro com a matéria passada, um pop-up especificando o erro aparecera na tela."
            importations={[
              'react',
              'semantic-ui-react',
              'react-redux',
              '../../../../hooks/useModal',
              '../../../../store/actions/article',
            ]}
          />

        </DetailsLevel2>
      </DetailsLevel1>

      <DetailsLevel1 
        title="Pasta Banners" 
        text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos.
        O componente renderizado pelo index.jsx é responsável por mostrar a seção de banners do painel de controle do usuário administrador. Este componente também gerencia as rotas desta seção."
        importations={[
          'react',
          'react-router-dom',
          '../../../components/admin/Header',
        ]}
      >
        <DetailsLevel2
          title="BannerCreate"
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. 
          O componente renderizado pelo index.jsx é responsável por mostrar na seção de banners o formulário para criação de banners."
          importations={[
            'react',
            'react-router-dom',
            'react-redux',
            '../../../advertiser/CriarBanner/components/BannerForm',
            '../../../../store/actions/banner'
          ]}
        />
        
        <DetailsLevel2
          title="BannerEdit"
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. 
          O componente renderizado pelo index.jsx é responsável por mostrar na seção de banners o formulário para edição de um banner já existente ou apenas visualização do seu conteúdo."
          importations={[
            'react',
            'react-router-dom',
            'react-redux',
            '../../../advertiser/CriarBanner/components/BannerForm',
            '../../../../store/actions/banner',
          ]}
        />
        
        <DetailsLevel2
          title="BannerList"
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. O componente renderizado pelo index.jsx é responsável por mostrar na seção de banners a listagem de todos os banners, aqui o usuário administrador pode aprovar ou bloquear banners."
          importations={[
            'react',
            'react-redux',
            'react-router-dom',
            '../../../../store/actions/banner',
            './components/AllBannerList',
          ]}
        >
          <DetailsLevel3 
            title="Pasta Components"
            text="Essa pasta possui uma única pasta com um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. O componente renderizado pelo index.jsx é responsável por mostrar uma tabela com todos os banners, caso ocorra algum erro será mostrado uma mensagem de erro no lugar da tabela."
            importations={[
              'react',
              'react-redux',
              'react-router-dom',
              '../../../../../../components/admin/table/Pagination',
              '../../../../../../components/admin/table/ItemsPerPage',
              '../../../components/AdminDeleteBannerModal',
              '../../../components/AdminBannerFilters',
              '../../../../../../hooks/useModal',
              '../../../../../../store/actions/banner',
            ]}
          />
        </DetailsLevel2>


        <DetailsLevel2
          title="Pasta Components"
          text="Essa pasta possui componentes especificos que são utilizados na pasta Banners."
        >
          <DetailsLevel3
            title="AdminBannerFilters"
            text="Componente que aplica um filtro nos banners listados."
            importations={[
              'react',
              'react-final-form',
              '../../../../components/admin/Filters',
              '../../../../components/form/Condition',
              '../../../../components/form/Input',
              '../../../../components/form/Select',
            ]}   
          />
          
          <DetailsLevel3
            title="AdminDeleteBannerModal"
            text="Componente que renderiza um pop-up pedindo a confirmação do usuário para deletar/desabilitar um banner. Caso ocorra algum erro com a banner passado, um pop-up especificando o erro aparecera na tela."
            importations={[
              'react',
              'semantic-ui-react',
              'react-redux',
              '../../../../hooks/useModal',
              '../../../../store/actions/banner',
            ]}   
          />

        </DetailsLevel2>
      </DetailsLevel1>

      <DetailsLevel1 
        title="Pasta Categories" 
        text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. O componente renderizado pelo index.jsx é responsável por mostrar a seção de categorias do painel de controle do usuário administrador. Este componente também gerencia as rotas desta seção."
        importations={[
          'react',
          'react-router-dom',
          '../../../components/admin/Header'
        ]}
      >
        <DetailsLevel2
          title="CategoryCreate" 
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. O componente renderizado pelo index.jsx é responsável por mostrar na seção de categorias o formulário para criação de categorias."
          importations={[
            'react',
            'react-router-dom',
            'react-redux',
            '../components/AdminCategoryForm',
            '../../../../store/actions/category',
          ]}
        />

        <DetailsLevel2
          title="CategoryEdit" 
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. O componente renderizado pelo index.jsx é responsável por mostrar na seção de categorias o formulário para edição de uma categoria já existente ou apenas visualização do seu conteúdo."
          importations={[
            'react',
            'react-router-dom',
            'react-redux',
            '../components/AdminCategoryForm',
            '../../../../store/actions/category',
          ]}
        />
        
        <DetailsLevel2
          title="CategoryList" 
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. O componente renderizado pelo index.jsx é responsável por mostrar na seção de Categorias todas as categorias, exibindo também opções de criar e deletar uma categoria."
          importations={[
            'react',
            'react-router-dom',
            'react-redux',
            '../../../../components/admin/table/Pagination',
            '../components/AdminDeleteCategoryModal',
            '../components/AdminCategoryFilters',
            '../../../../components/admin/table/ItemsPerPage',
            '../../../../hooks/useModal',
            '../../../../store/actions/category',
          ]}
        />

        <DetailsLevel2
          title="Pasta Components"
          text="Essa pasta possui componentes especificos que são utilizados na pasta Categories."
        >
          <DetailsLevel3
            title="AdminCategoryFilters"
            text="Componente que aplica um filtro nas categorias listadas."
            importations={[
              'react',
              'react-final-form',
              '../../../../components/admin/Filters',
              '../../../../components/form/Condition',
              '../../../../components/form/Input',
            ]}
          />

          <DetailsLevel3
            title="AdminCategoryForm"
            text="Componente que renderiza um formulário para a criação de categorias, também usado para edição das mesmas."
            importations={[
              'react',
              'react-final-form',
              '../../../../components/form/Condition',
              '../../../../components/form/Checkbox',
              '../../../../components/form/Input',
              '../../../../store/actions/file',
              '../../../../utils',
            ]}
          />

          <DetailsLevel3
            title="AdminDeleteCategoryModal"
            text="Componente que renderiza um pop-up pedindo a confirmação do usuário para deletar/desabilitar uma categoria. Caso ocorra algum erro com a categoria passada, um pop-up especificando o erro aparecera na tela."
            importations={[
              'react',
              'react-final-form',
              'react-redux',
              '../../../../hooks/useModal',
              '../../../../store/actions/category',
            ]}
          />
        </DetailsLevel2>
      </DetailsLevel1>

      <DetailsLevel1 
        title="Pasta Locations" 
        text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. O componente renderizado pelo index.jsx é responsável por mostrar a seção de localizações do painel de controle do usuário administrador. Este componente também gerencia as rotas desta seção."
        importations={[
          'react',
          'react-router-dom',
          '../../../components/admin/Header',
        ]}
      >
        <DetailsLevel2
          title="Pasta Components"
          text="Essa pasta possui componentes especificos que são utilizados na pasta Locations."
        >
          <DetailsLevel3
            title="AdminDeleteLocationModal"
            text="Componente que renderiza um pop-up pedindo a confirmação do usuário para deletar/desabilitar uma localização. Caso ocorra algum erro com a localização passada, um pop-up especificando o erro aparecera na tela."
            importations={[
              'react',
              'semantic-ui-react',
              'react-redux',
              '../../../../hooks/useModal',
              '../../../../store/actions/location'
            ]}
          />

          <DetailsLevel3
            title="AdminLocationFilters"
            text="Componente que aplica um filtro nas localizações listadas."
            importations={[
              'react',
              'react-final-form',
              '../../../../components/admin/Filters',
              '../../../../components/form/Condition',
              '../../../../components/form/Input',
            ]}
          />

          <DetailsLevel3
            title="AdminLocationForm"
            text="Componente que renderiza um formulário para a criação de localizações, também usado para edição das mesmas."
            importations={[
              'react',
              'react-final-form',
              '../../../../components/form/Input',
            ]}
          />
        </DetailsLevel2>

        <DetailsLevel2
          title="LocationCreate"
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. O componente renderizado pelo index.jsx é responsável por mostrar na seção de localizações o formulário para criação de localizações."
          importations={[
            'react',
            'react-router-dom',
            'react-redux',
            '../components/AdminLocationForm',
            '../../../../store/actions/location',
          ]}
        />

        <DetailsLevel2
          title="LocationEdit"
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. O componente renderizado pelo index.jsx é responsável por mostrar na seção de localizações o formulário para edição de uma localização já existente ou apenas visualização do seu conteúdo."
          importations={[
            'react',
            'react-router-dom',
            'react-redux',
            '../components/AdminLocationForm',
            '../../../../store/actions/location',
          ]}
        />

        <DetailsLevel2
          title="LocationList"
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. O componente renderizado pelo index.jsx é responsável por mostrar na seção de Localizações todas as localizações, exibindo também opções de criar e deletar uma localização."
          importations={[
            'react',
            'react-router-dom',
            'react-redux',
            '../../config',
            '../../../../components/admin/table/Table',
            '../../../../components/admin/table/Pagination',
            '../components/AdminDeleteLocationModal',
            '../components/AdminLocationFilters',
            '../../../../components/admin/table/ItemsPerPage',
            '../../../../hooks/useModal',
            '../../../../store/actions/location',
          ]}
        />
        
      </DetailsLevel1>

      <DetailsLevel1 
        title="Pasta Quotations" 
        text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. O componente renderizado pelo index.jsx é responsável por mostrar a seção de cotações do painel de controle do usuário administrador. Este componente também gerencia as rotas desta seção."
        importations={[
          'react',
          'react-router-dom',
          '../../../components/admin/Header',          
        ]}
      >
        <DetailsLevel2
          title="Pasta Components"
          text="Essa pasta possui componentes especificos que são utilizados na pasta Quotations."
        >
          <DetailsLevel3
            title="AdminQuotationFilters"
            text="Componente que aplica um filtro nas cotações listadas."
            importations={[
              'react',
              'react-final-form',
              '../../../../components/admin/Filters',
              '../../../../components/form/Condition',
              '../../../../components/form/Input,'              
            ]}
          />
        </DetailsLevel2>

        <DetailsLevel2
          title="QuotationList"
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. O componente renderizado pelo index.jsx é responsável por mostrar na seção de Cotações todas as cotações, exibindo também os serviços já contradados de cada uma."
          importations={[
            'react',
            'react-redux',
            'react-router-dom',
            '../../../../components/admin/table/Pagination',
            '../components/AdminQuotationFilters',
            '../../../../components/admin/table/ItemsPerPage',
            '../../../../hooks/useModal',
            '../../../../store/actions/quotation',
          ]}
        />
        
      </DetailsLevel1>

      <DetailsLevel1 
        title="Pasta Users" 
        text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. O componente renderizado pelo index.jsx é responsável por mostrar a seção de Usuários do painel de controle do usuário administrador. Este componente também gerencia as rotas desta seção."
      >
        <DetailsLevel2
          title="Pasta Components"
          text="Essa pasta possui componentes especificos que são utilizados na pasta Users."
        >
          <DetailsLevel3
            title="AdminDeleteUserModal"
            text="Componente que renderiza um pop-up pedindo a confirmação do usuário administrador para deletar/desabilitar um usuário. Caso ocorra algum erro com a localização passada, um pop-up especificando o erro aparecera na tela."
            importations={[
              'react',
              'semantic-ui-react',
              'react-redux',
              '../../../../hooks/useModal',
              '../../../../store/actions/user',
            ]}
          />

          <DetailsLevel3
            title="AdminUserFilters"
            text="Componente que aplica um filtro nos usuários listados."
            importations={[
              'react',
              'react-final-form',
              '../../../../components/admin/Filters',
              '../../../../components/form/Condition',
              '../../../../components/form/Input',
            ]}
          />

          <DetailsLevel3
            title="AdminUserForm"
            text="Componente que renderiza um formulário para a criação de usuários, também usado para edição dos mesmos."
            importations={[
              'react',
              'react-final-form',
              "format-string-by-pattern",
              "react-redux",
              '../../../../components/form/Condition',
              '../../../../components/form/CustomField',
              '../../../../components/form/Input',
              '../../../../components/form/Select',
              '../../../../store/actions/location',
            ]}
          />
        </DetailsLevel2>   

        <DetailsLevel2
          title="UserCreate"
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. O componente renderizado pelo index.jsx é responsável por mostrar na seção de Usuários o formulário para criação de usuários."
          importations={[
            'lodash',
            'react',
            'react-router-dom',
            'react-redux',
            '../components/AdminUserForm',
            '../../../../store/actions/user',
          ]}
        />   

        <DetailsLevel2
          title="UserEdit"
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. O componente renderizado pelo index.jsx é responsável por mostrar na seção de Usuários o formulário para edição de um usuário já existente ou apenas visualização do seu conteúdo."
          importations={[
            'react',
            'react-router-dom',
            'react-redux',
            'format-string-by-pattern',
            '../components/AdminUserForm',
            '../../../../store/actions/user',
          ]}
        />   

        <DetailsLevel2
          title="UserList"
          text="Essa pasta possui um arquivo index.jsx que é carregado ao importarmos apenas está pasta para outro componente sem especificar o arquivo/pastas que queremos. O componente renderizado pelo index.jsx é responsável por mostrar na seção de usuários todos os usuários, exibindo também opções de criar e deletar um usuário."
          importations={[
            'react',
            'react-router-dom',
            'react-redux',
            'format-string-by-pattern',
            '../../../../components/admin/table/Pagination',
            '../components/AdminDeleteUserModal',
            '../components/AdminUserFilters',
            '../../../../components/admin/table/ItemsPerPage',
            '../../../../hooks/useModal',
            '../../../../store/actions/user',
          ]}
        />   
      </DetailsLevel1>

      <DetailsLevel1 
        title="admin.css"
        text="Arquivo de estilização para o painel de controle do usuário administrador.."
      />

      <DetailsLevel1 
        title="Admin.jsx"
        text="Esse componente é responsável por renderizar a página do painel de controle do usuário administrador e gerenciar as rotas da mesmas."
        importations={[
          './admin.css',
          'react',
          'react-redux',
          'react-router-dom',
          'react-toastify/dist/ReactToastify.css',
          '../../routes/history',
          '../../components/admin/menu/AdminSideBarMenu',
          '../../store/actions/menu',
        ]}
      />

      <DetailsLevel1 
        title="config.js"
        text="Esse arquivo define configurações de campos para os formulários dentro das seções do painel de controle do usuário administrador."
      />

      <DetailsLevel1 
        title="Dashboard.jsx"
        text="Esse arquivo é responsável por renderizar no painel de controle uma seção padrão de boas vindas para o usuário administrador."
        importations={[
          'react',
          '../../components/admin/Header',
        ]}
      />

      <DetailsLevel1 
        title="NoMatch.jsx"
        text="Esse arquivo é responsável por renderizar uma seção de erro padrão para o usuário logado como administrador, que será mostrada toda vez que o usuário tentar buscar por uma URL inexistente enquanto estiver no painel de controle do usuário administrador."
        importations={[
          'react',
          'react-router-dom',
          '../../components/admin/Header'
        ]}
      />
    
    </div>
  )
}