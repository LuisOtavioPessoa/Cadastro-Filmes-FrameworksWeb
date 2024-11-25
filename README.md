## Sistema de Cadastro de Filmes 🎬
Este projeto é um sistema de gerenciamento de filmes desenvolvido para registrar, listar, editar e excluir informações de filmes. Ele possui uma interface amigável, com navegação intuitiva, permitindo que o usuário insira novos filmes, visualize a lista atual, edite detalhes existentes e remova registros indesejados.  
O projeto segue boas práticas de desenvolvimento, com separação de responsabilidades e uso de componentes reutilizáveis.

## Tecnologias Utilizadas 🚀
- **Front-end**:  
  - React.js: Utilizado para criação de componentes interativos e gerenciamento do estado da aplicação, proporcionando uma interface de usuário dinâmica e responsiva.
  - React Hook Form: Facilita a manipulação de formulários, permitindo a validação e o gerenciamento de estado de forma simplificada.
  - Bootstrap: Framework CSS para estilização e layout responsivo, garantindo uma interface amigável e acessível em dispositivos móveis e desktop.

- **Back-end**:  
  - Node.js: Utilizado como plataforma para o servidor, proporcionando a execução de código JavaScript no lado do servidor.
  - Express.js: Framework para Node.js que facilita a criação de APIs RESTful, proporcionando rotas e middleware para tratar as requisições HTTP.
  - Sequelize: ORM utilizado para interagir com o banco de dados, facilitando a criação, leitura, atualização e deleção de dados com a ajuda de modelos definidos em JavaScript.
  - CORS (Cross-Origin Resource Sharing): Middleware que permite que a API seja acessada de diferentes origens, útil em projetos com front-end e back-end separados.

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

## Pré-requisitos 📜
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

## Endpoints 🔗
A aplicação consome a API de Filmes, que permite realizar operações CRUD (Criar, Ler, Atualizar, Deletar) em filmes. A seguir, estão os principais endpoints utilizados na API:
1. **GET /filmes**
- Descrição: Retorna uma lista de todos os filmes cadastrados na aplicação.
- Resposta: Um array de objetos, onde cada objeto contém as informações de um filme.
2. **POST /filmes**
- Descrição: Cria um novo filme na aplicação.
- Resposta: O filme criado, com os dados enviados e um identificador único.
3. **GET /filmes/:id**
- Descrição: Retorna as informações de um filme específico, com base no id fornecido.
- Parâmetros:
  - id: Identificador único do filme.
- Resposta: Um objeto com os detalhes do filme correspondente ao id.
4. **PUT /filmes/:id**
- Descrição: Atualiza as informações de um filme existente, com base no id fornecido.
- Parâmetros:
  - id: Identificador único do filme a ser atualizado.
- Resposta: O filme atualizado com os novos dados.
5. **DELETE /filmes/:id**
- Descrição: Remove um filme da aplicação, com base no id fornecido.
- Parâmetros:
  - id: Identificador único do filme a ser deletado.
- Resposta: Mensagem de sucesso indicando que o filme foi removido.

##  🛠 Estrutura do Projeto

**Front-end**
```bash
├── node_modules/              # Diretório de dependências do Node.js
├── public/                    # Arquivos estáticos
├── src/                       # Código fonte do projeto
│   ├── assets/                # Imagens, fontes, e outros arquivos estáticos
│   ├── components/            # Componentes reutilizáveis do projeto
│   ├── services/              # Arquivos de comunicação com a API e serviços
│   ├── types/                 # Definições de tipos TypeScript
│   ├── App.tsx                # Arquivo principal do aplicativo
│   ├── main.tsx               # Ponto de entrada principal da aplicação
│   └── vite-env.d.ts          # Declarações de tipos para o Vite
├── package.json               # Arquivo de configuração do projeto e dependências
├── package-lock.json          # Lockfile do npm (controla versões exatas de dependências)
├── tsconfig.app.json          # Configuração do TypeScript para o aplicativo
├── tsconfig.json              # Configuração global do TypeScript
├── tsconfig.node.json         # Configuração do TypeScript para o Node.js
└── index.html             # Arquivo HTML principal
```
**Back-end**
```bash
├── node_modules/              # Diretório de dependências do Node.js
├── src/                       # Código fonte do projeto
│   ├── controller/            # Controladores (lógica de negócios)
│   │   └── FilmeController.js # Lógica para manipulação de filmes
│   ├── db/                    # Conexão e manipulação do banco de dados
│   │   └── db.js              # Configuração da conexão com o banco de dados
│   ├── model/                 # Definições de modelos de dados (ORM ou Mongoose)
│   │   └── Filme.js           # Modelo de dados para filmes
│   ├── router/                # Definições de rotas da API
│   │   └── FilmeRouter.js     # Rotas para gerenciamento de filmes
│   └── index.js               # Arquivo de inicialização do servidor
├── package.json               # Arquivo de configuração do projeto e dependências
├── package-lock.json          # Lockfile do npm (controla versões exatas de dependências)
```






