#!/bin/bash

# Nome do projeto
PROJECT_NAME="midium-api-express"

# Cria o diretório do projeto
mkdir -p $PROJECT_NAME

# Navega para o diretório do projeto
cd $PROJECT_NAME

# Cria a estrutura de diretórios e arquivos
mkdir -p src/app/controllers
mkdir -p src/routes
mkdir -p src/data

# Cria os arquivos necessários
touch src/app/controllers/userController.js
touch src/routes/userRoutes.js
touch src/data/user.json
touch src/index.js
touch package.json
touch README.md

# Adiciona conteúdo inicial para o arquivo user.json
echo '[
  {
    "id": 1,
    "name": "Admin User",
    "email": "admin@example.com",
    "password": "123456"
  }
]' > src/data/user.json

# Adiciona conteúdo inicial para o README.md
echo "# Project API

This is a basic project structure for a Node.js API with a CRUD system for users." > README.md

# Informa o sucesso da criação da estrutura
echo "Estrutura do projeto criada com sucesso!"

# Inicializa o projeto Node.js
npm init -y

# Instala os pacotes necessários
npm install express bcrypt jsonwebtoken