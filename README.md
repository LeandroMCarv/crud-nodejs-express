# CRUD Node.js com Express

Este projeto é uma API REST simples desenvolvida em **Node.js** utilizando **Express**, com o objetivo de demonstrar um CRUD (Create, Read, Update, Delete) organizado em camadas, seguindo uma estrutura comum em aplicações backend.

## 📌 Tecnologias utilizadas

- Node.js
- Express 5
- MySQL
- Biblioteca `config` para gerenciamento de configurações
- Arquitetura em camadas (Router → Controller → Model)
- API REST


## 📁 Estrutura do projeto

```
├── config
│   ├── appCustom.js
│   └── default.json
│
├── controllers
│   └── atendimentoController.js
│
├── infraestrutura
│   ├── conexao.js
│   └── tabelas.js
│
├── models
│   └── atendimentoModel.js
│
├── routers
│   ├── atendimentoRoute.js
│   └── index.js
│
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
```

## 🧩 Descrição das pastas

### `config/`
- **appCustom.js**: Arquivo responsável por configurar e inicializar o Express, middlewares e rotas.
- **default.json**: Contém as configurações da aplicação, como porta do servidor e parâmetros de conexão com o banco de dados.

### `controllers/`
- **atendimentoController.js**: Controlador responsável por receber as requisições HTTP, validar dados e chamar os métodos do model.

### `infraestrutura/`
- **conexao.js**: Gerencia a conexão com o banco de dados.
- **tabelas.js**: Responsável por criar e inicializar as tabelas no banco de dados.

### `models/`
- **atendimentoModel.js**: Contém a lógica de acesso aos dados (queries SQL) relacionados à entidade Atendimento.

### `routers/`
- **atendimentoRoute.js**: Define as rotas relacionadas ao recurso Atendimento.
- **index.js**: Centraliza e registra todas as rotas da aplicação.

## 🚀 Como executar o projeto

### Pré-requisitos

- Node.js (versão 18+ recomendada)
- MySQL em execução

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/LeandroMCarv/crud-nodejs-express
```

2. Acesse o diretório do projeto:
```bash
cd crud-nodejs-express
```

3. Instale as dependências:
```bash
npm install
```

4. Configure o banco de dados no arquivo `config/default.json`:
```json
{
  "port": 3000,
  "conexao": {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "",
    "database": "atendimentos"
  }
}
```

5. Crie o banco de dados no MySQL:
```sql
CREATE DATABASE atendimentos;
```

6. Inicie a aplicação:
```bash
node index.js
```

A aplicação será iniciada na porta definida no arquivo `default.json`.


## 🔀 Rotas da API

### Recurso: Atendimento

| Método | Endpoint | Descrição |
|------|---------|-----------|
| GET | /atendimentos | Lista todos os atendimentos |
| POST | /atendimentos | Cria um novo atendimento |
| PUT | /atendimento/:id | Atualiza um atendimento pelo ID |
| DELETE | /atendimento/:id | Remove um atendimento pelo ID |

### Exemplo de payload (POST /atendimentos)

```json
{
  "cliente": "João Silva",
  "data": "2024-01-10",
  "servico": "Suporte técnico",
  "status": "aberto"
}
```


## 🧠 Arquitetura da aplicação

O projeto segue uma separação clara de responsabilidades:

- **Router**: define os endpoints da API e direciona as requisições
- **Controller**: trata as regras de negócio e validações
- **Model**: responsável pelo acesso ao banco de dados
- **Infraestrutura**: gerencia conexão e criação de tabelas

Esse padrão facilita manutenção, testes e escalabilidade da aplicação.

## 📚 Objetivo do projeto

Este projeto tem fins educacionais e de portfólio, servindo como base para estudos de:
- Criação de APIs REST com Node.js
- Organização de projetos backend
- Integração com MySQL
- Boas práticas de separação de responsabilidades

---
Sinta-se à vontade para contribuir, sugerir melhorias ou adaptar este projeto às suas necessidades 😄

