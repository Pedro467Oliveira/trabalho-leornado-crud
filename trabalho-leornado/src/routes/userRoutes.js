import { Router } from "express";
import {
	createFornecedorController,
	getFornecedoresController,
	getFornecedorByIdController,
	updateFornecedorController,
	deleteFornecedorController,
} from "../controllers/userController.js";

const router = Router();

router.post('/fornecedores', createFornecedorController);
router.get('/fornecedores', getFornecedoresController);
router.get('/fornecedores/:id', getFornecedorByIdController);
router.put('/fornecedores/:id', updateFornecedorController);
router.delete('/fornecedores/:id', deleteFornecedorController);

export default router;

