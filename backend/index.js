import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';

const app = express();
app.use(cors());                   // configure origin se precisar
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.listen(5000, () => console.log('API rodando na porta 5000'));
