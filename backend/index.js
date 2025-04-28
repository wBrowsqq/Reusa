import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);


// Para o servidor nao cair -> se ficar inativo ele desliga, entao o bot fica chamando o ping 
app.get('/api/ping', (req, res) => {
    res.json({ status: 'pong' });
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
