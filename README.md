## Sistema de Cadastro de Filmes
Este projeto é um sistema de gerenciamento de filmes desenvolvido para registrar, listar, editar e excluir informações de filmes. Ele possui uma interface amigável, com navegação intuitiva, permitindo que o usuário insira novos filmes, visualize a lista atual, edite detalhes existentes e remova registros indesejados.  
O projeto segue boas práticas de desenvolvimento, com separação de responsabilidades e uso de componentes reutilizáveis.

## Tecnologias Utilizadas 🚀
- **Front-end**:  
  - React.js: para criação de componentes interativos e gerenciamento do estado.  
  - React Hook Form: para facilitar a manipulação de formulários.  
  - Bootstrap: para estilização e layout responsivo.  

- **Back-end**:  
  - API simulada com um servidor local configurado para lidar com as operações CRUD.  

- **Banco de Dados**:  
  - MySQL: para armazenamento e gerenciamento das informações de filmes.  

- **Outras Ferramentas**:  
  - Axios: para realizar as requisições HTTP.  
  - TypeScript: para maior segurança e padronização no código.  

## Funcionalidades 🌟 
✔️ **Inserção de Filmes**  
   - Permite cadastrar um novo filme com informações como título, ator principal, faixa etária e gênero.  
   - Validação de campos para garantir que todas as informações obrigatórias sejam fornecidas antes do envio.  

✔️ **Listagem de Filmes**  
   - Exibe uma tabela com todos os filmes cadastrados.  
   - Apresenta botões para edição ou exclusão de cada registro.  

✔️ **Edição de Filmes**  
   - Permite alterar informações de um filme já cadastrado.  
   - Atualiza a lista em tempo real após a alteração.  

✔️ **Exclusão de Filmes**  
   - Remove permanentemente o filme selecionado.  
   - Requisição de confirmação antes da exclusão para evitar exclusões acidentais.  

✔️ **Interface Dinâmica**  
   - Alternância entre as telas de inserção e listagem de filmes por meio da barra de navegação.

## Pré-requisitos 
Antes de começar, certifique-se de ter instalado:
- Node.js (versão 20.17.0 ou superior)
- Gerenciador de pacotes: NPM
- MySQL
- Instalar Dependências 
  - Express,  Sequelize, mysql2, CORS , axios

Para instalar as dependências do projeto, execute o seguinte comando na pasta raiz do projeto:
```bash
npm install
```

