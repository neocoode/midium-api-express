const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dataFilePath = 'src/data/user.json';

// Função para ler os dados
function getData() {
  const data = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(data);
}

// Função para salvar os dados
function saveData(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
}

// Listar todos os usuários
exports.getUsers = (req, res) => {
  const users = getData();
  res.json(users);
};

// Obter usuário por ID
exports.getUserById = (req, res) => {
  const users = getData();
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Usuário não encontrado' });
  }
};
// Criar novo usuário
exports.createUser = async (req, res) => {
  const users = getData();
  const { name, email, password } = req.body;
  // Verificar se o e-mail já está em uso
  const userExists = users.some(u => u.email === email);
  if (userExists) {
    return res.status(400).json({ message: 'E-mail já cadastrado' });
  }

  // Criptografar a senha
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password: hashedPassword
  };
  users.push(newUser);
  saveData(users);
  res.status(201).json(newUser);
};

// Atualizar usuário por ID
exports.updateUser = async (req, res) => {
  const users = getData();
  const { name, email, password } = req.body;
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex !== -1) {
    // Criptografar a nova senha se fornecida
    const hashedPassword = password ? await bcrypt.hash(password, 10) : users[userIndex].password;
    users[userIndex] = {
      id: users[userIndex].id,
      name: name || users[userIndex].name,
      email: email || users[userIndex].email,
      password: hashedPassword
    };
    saveData(users);
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: 'Usuário não encontrado' });
  }
};

// Deletar usuário por ID
exports.deleteUser = (req, res) => {
  const users = getData();
  const newUsers = users.filter(u => u.id !== parseInt(req.params.id));
  if (newUsers.length !== users.length) {
    saveData(newUsers);
    res.json({ message: 'Usuário removido com sucesso' });
  } else {
    res.status(404).json({ message: 'Usuário não encontrado' });
  }
};

// Login de usuário
exports.login = (req, res) => {
  const users = getData();
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (user && bcrypt.compareSync(password, user.password)) {
    // Gerar token JWT
    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });
    res.json({ message: 'Login bem-sucedido', token });
  } else {
    res.status(401).json({ message: 'E-mail ou senha incorretos' });
  }
};