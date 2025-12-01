import express from 'express';
import userRoutes from './routes/userRoutes.js';
import { getDatabase } from './config/db.js';

const app = express();
app.use(express.json());

// Middleware para anexar a DB na requisição
app.use(async (req, res, next) => {
	try {
		req.db = await getDatabase();
		// fecha a conexão quando a resposta terminar
		res.on('finish', async () => {
			try {
				if (req.db) await req.db.close();
			} catch (e) {}
		});
		next();
	} catch (err) {
		next(err);
	}
});

app.use('/api', userRoutes);

app.get('/', (req, res) => res.status(200).json({ status: 'ok' }));
app.use((req, res) => res.status(404).json({ error: 'Rota não encontrada' }));

export default app;