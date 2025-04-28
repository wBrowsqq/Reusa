import express from 'express';
import { getMe, register, login } from '../controllers/authController.js';

const router = express.Router();

router.get('/me', getMe); // configura o token
router.post('/register', register); // configura o registro
router.post('/login', login); // configura o login

export default router;
