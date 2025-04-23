import express from 'express';
import { verifyJWT } from '../middleware/auth.js';
import { pool } from '../db/db.js';

const router = express.Router();

router.get('/profile', verifyJWT, async (req, res) => {
  const [rows] = await pool.query('SELECT id, name, email FROM users WHERE id = ?', [req.userId]);
  res.json(rows[0]);
});

export default router;
