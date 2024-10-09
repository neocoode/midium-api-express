


### 1. **Arquivo README.md**

Aqui está um exemplo de **`README.md`** para o seu projeto:

![logo](https://github.com/user-attachments/assets/3b721ca6-b870-4c27-b34e-3d545f9c2770)

```markdown
# Midium API Express

Este projeto é uma API RESTful simples desenvolvida em Node.js e Express. A API realiza operações CRUD (Create, Read, Update, Delete) em usuários armazenados em um arquivo JSON (`user.json`). A autenticação de login é feita com JWT (JSON Web Token), e as senhas são criptografadas com bcrypt.

## Estrutura do Projeto

   ```
      project/
      │
      ├── src/
      │   ├── app/
      │   │   ├── controllers/
      │   │   │   └── userController.js
      │   ├── routes/
      │   │   └── userRoutes.js
      │   ├── data/
      │   │   └── user.json
      │   └── index.js
      │
      ├── package.json
      ├── README.md
      └── .gitignore
   ```

## Instalação

1. Clone este repositório:

   ```bash
   git clone <git-uri>
   cd midium-api-express
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o servidor em modo de desenvolvimento com **nodemon**:

   ```bash
   npm run dev
   ```

   Ou execute em produção:

   ```bash
   npm start
   ```

## Funcionalidades

- **CRUD de Usuários:**
  - Listar todos os usuários
  - Obter usuário por ID
  - Criar um novo usuário (com criptografia de senha)
  - Atualizar usuário
  - Deletar usuário

- **Autenticação JWT:**
  - Login com email e senha (token JWT gerado após login bem-sucedido)

## Endpoints da API

### Listar Usuários

```bash
GET /api/users
```

### Obter Usuário por ID

```bash
GET /api/users/:id
```

### Criar Usuário

```bash
POST /api/users
```
Corpo da requisição (JSON):
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

### Atualizar Usuário

```bash
PUT /api/users/:id
```
Corpo da requisição (JSON):
```json
{
  "name": "John Doe Updated",
  "email": "johnupdated@example.com",
  "password": "newpassword"
}
```

### Deletar Usuário

```bash
DELETE /api/users/:id
```

### Login

```bash
POST /api/users/login
```
Corpo da requisição (JSON):
```json
{
  "email": "admin@example.com",
  "password": "123456"
}
```
Resposta:
```json
{
  "message": "Login bem-sucedido",
  "token": "<jwt-token>"
}
```

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **bcrypt**: para criptografar senhas
- **jsonwebtoken (JWT)**: para autenticação
- **nodemon** (apenas no desenvolvimento)

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir um **pull request** ou **issue**.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
```

---

### 2. **Arquivo .gitignore**

Aqui está um exemplo de **`.gitignore`** para ignorar arquivos e diretórios que não devem ser incluídos no controle de versão:

```gitignore
# Diretórios e arquivos de dependências
node_modules/
npm-debug.log*

# Arquivos de ambiente
.env

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Pastas de cobertura de teste
coverage/

# Sistema operacional e editores
.DS_Store
Thumbs.db
.vscode/
.idea/

# Arquivos temporários
*.tmp
*.temp
```

---

### Explicações:

- **`README.md`**: Fornece uma visão geral do projeto, como instalá-lo, funcionalidades, endpoints disponíveis, e as tecnologias usadas.
- **`.gitignore`**: Ignora arquivos que não devem ser rastreados pelo Git, como dependências (node_modules), arquivos de logs, arquivos de ambiente (`.env`), entre outros.

Agora, com esses dois arquivos, o projeto estará documentado e organizado, pronto para colaboração e desenvolvimento.
