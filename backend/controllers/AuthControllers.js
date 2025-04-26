import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../db/db.js';
import dotenv from 'dotenv';

dotenv.config();

export const getMe = (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido', field: 'token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = db.prepare('SELECT id, name, email, role FROM users WHERE id = ?').get(decoded.id);

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado', field: 'user' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Token inválido', field: 'token' });
  }
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (name.length < 2 || name.length > 50) {
      return res.status(400).json({ message: 'O nome deve ter entre 2 e 50 caracteres', field: 'name' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Email inválido', field: 'email' });
    }

    const existingUser = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
    if (existingUser) {
      return res.status(400).json({ message: 'Email já registrado', field: 'email' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'A senha deve ter pelo menos 6 caracteres', field: 'password' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const stmt = db.prepare('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)');
    const result = stmt.run(name, email, hashedPassword, 'user');

    const token = jwt.sign({ id: result.lastInsertRowid, role: 'user' }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({
      id: result.lastInsertRowid,
      name,
      email,
      role: 'user',
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno no servidor', field: 'server' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);

    if (!user) {
      return res.status(401).json({ message: 'Email não cadastrado', field: 'email' });
    }

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
};