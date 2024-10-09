const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/userRoutes');

// Middleware para permitir JSON
app.use(express.json());
// Usar as rotas de usuários
app.use('/api/users', userRoutes);
// Iniciar o servidor
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});