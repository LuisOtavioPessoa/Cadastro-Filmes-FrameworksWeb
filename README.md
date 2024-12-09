# Sistema de Cadastro de Filmes 🎬
Este projeto é um sistema de gerenciamento de filmes desenvolvido para registrar, listar, editar e excluir informações de filmes. Ele possui uma interface amigável, com navegação intuitiva, permitindo que o usuário insira novos filmes, visualize a lista atual, edite detalhes existentes e remova registros indesejados.  
O projeto segue boas práticas de desenvolvimento, com separação de responsabilidades e uso de componentes reutilizáveis.

## Tecnologias Utilizadas 🚀
### **Back-end**:  
  - **Node.js:** Utilizado como plataforma para o servidor, permitindo a execução de código JavaScript no lado do servidor de forma eficiente.
  - **Express.js:** Framework minimalista para Node.js, usado para construir a API REST de forma rápida e escalável.
  - **Sequelize:** ORM (Object-Relational Mapping) utilizado para gerenciar o banco de dados relacional MySQL com sintaxe JavaScript.
  - **CORS (Cross-Origin Resource Sharing):** Middleware que permite que a API seja acessada de diferentes origens, útil em projetos com front-end e back-end separados.
  - **MySQL:** Banco de dados relacional utilizado para armazenar as informações dos filmes.

### **Front-end**:  
  - **React:** Biblioteca JavaScript para construção de interfaces de usuário interativas e reutilizáveis.
  - **React Bootstrap:** Biblioteca de componentes para React baseada no Bootstrap, utilizada para estilização e responsividade.
  - **TypeScript** Extensão do JavaScript que adiciona tipagem estática, facilitando a manutenção e evitando erros durante o desenvolvimento.
  - **Axios:** Biblioteca para realizar requisições HTTP, utilizada para comunicação com o back-end.

## Funcionalidades 🌟 
✔️ **Cadastrar Filmes**  
✔️ **Listar Filmes**  
✔️ **Buscar Filmes**  
✔️ **Editar Filmes**  
✔️ **Excluir Filmes**  

## Objetivo 🎯
O objetivo do projeto é fornecer uma solução eficiente para gerenciar um catálogo de filmes, permitindo ao usuário realizar operações CRUD (Create, Read, Update, Delete) de forma simples e acessível.

## Requisitos 🛠️ 
- 🔹 **Node.js**: Versão 16 ou superior. [Site Oficial Node.js](https://nodejs.org/en)
- 🔹 **MySQL**: Versão 8 ou superior. [Site Oficial MySQL](https://www.mysql.com/)

## Configuração do Projeto (Instalação) ⚙️
Para rodar o projeto, siga as etapas abaixo:

1- **Clone este repositório:**
```bash
git clone https://github.com/seuprojeto/sistema-cadastro-filmes.git
```
2- **Navegue para o diretório do back-end:**
```bash
cd back-end
```
3- **Instale as dependências:**
```bash
npm install
```
4- **Configure o banco de dados em ```src/db/db.js.```**

5- **Inicie o servidor do back-end:**
```bash
npm run dev
```
6- **Navegue para o diretório do front-end:**
```bash
cd react/aulareact
```
7- **Instale as dependências:**
```bash
npm install
```
8- **Inicie o servidor do front-end:**
```bash
npm run dev
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
├── src/                       # Código fonte do front-end
│   ├── components/            # Componentes reutilizáveis do projeto
│   │   ├── FormFilmes.tsx     # Formulário de cadastro de filmes
│   │   ├── ListaFilmes.tsx    # Lista e busca de filmes
│   │   ├── FormEditarFilme.tsx # Formulário de edição de filmes
│   │   └── Header.tsx         # Navegação principal
│   ├── service/               # Comunicação com a API e serviços
│   │   └── api.ts             # Funções para comunicação com o back-end
│   ├── types/                 # Definições de tipos TypeScript
│   │   └── Filme.ts           # Tipo `Filme` para definição de estrutura de dados
│   ├── App.tsx                # Arquivo principal do aplicativo
│   ├── main.tsx               # Ponto de entrada principal da aplicação
│   └── vite-env.d.ts          # Declarações de tipos para o Vite
├── package.json               # Arquivo de configuração do projeto e dependências
├── package-lock.json          # Lockfile do npm (controla versões exatas de dependências)
└── index.html                 # Arquivo HTML principal

```
**Back-end**
```bash
├── node_modules/              # Diretório de dependências do Node.js
├── src/                       # Código fonte do back-end
│   ├── controller/            # Controladores para lógica de negócios
│   │   └── FilmeController.js # Lógica de CRUD para filmes
│   ├── db/                    # Configuração do banco de dados
│   │   └── db.js              # Arquivo de configuração do Sequelize
│   ├── model/                 # Definições de modelos de dados
│   │   └── Filme.js           # Modelo para a tabela de filmes
│   ├── router/                # Rotas da API
│   │   └── FilmeRouter.js     # Rotas de CRUD para filmes
│   └── index.js               # Configuração principal do servidor
├── package.json               # Arquivo de configuração do projeto e dependências
└── package-lock.json          # Lockfile do npm (controla versões exatas de dependências)

```






