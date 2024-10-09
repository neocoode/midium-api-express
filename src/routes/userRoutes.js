const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/userController');

// Rotas CRUD para usuários
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
// Rota de login
router.post('/login', userController.login);
module.exports = router;