import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json());
app.use('/api', userRoutes);

app.get('/', (req, res) => res.status(200).json({status:'ok'}));
app.use((req,res)=>res.status(404).json({error:'Rota não encontrada'}));

export default app;