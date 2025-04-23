import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../db/db.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Rota para obter dados do usuário autenticado
router.get('/me', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido', field: 'token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const [users] = await pool.execute('SELECT id, name, email, role FROM users WHERE id = ?', [decoded.id]);

    if (users.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado', field: 'user' });
    }

    const user = users[0];
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Token inválido', field: 'token' });
  }
});

// Rota de registro
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Validar tamanho do nome
    if (name.length < 2 || name.length > 50) {
      return res.status(400).json({ message: 'O nome deve ter entre 2 e 50 caracteres', field: 'name' });
    }

    // Validar formato de email (básico)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Email inválido', field: 'email' });
    }

    // Verificar se o email já existe
    const [existingUsers] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (existingUsers.length > 0) {
      return res.status(400).json({ message: 'Email já registrado', field: 'email' });
    }

    // Validar tamanho da senha
    if (password.length < 6) {
      return res.status(400).json({ message: 'A senha deve ter pelo menos 6 caracteres', field: 'password' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const [result] = await pool.execute(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, hashedPassword, 'user']
    );

    const token = jwt.sign({ id: result.insertId, role: 'user' }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({
      id: result.insertId,
      name,
      email,
      role: 'user',
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno no servidor', field: 'server' });
  }
});

// Rota de login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const [users] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (users.length === 0) {
      return res.status(401).json({ message: 'Email não cadastrado', field: 'email' });
    }

    const user = users[0];
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Senha incorreta', field: 'password' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno no servidor', field: 'server' });
  }
});

export default router;