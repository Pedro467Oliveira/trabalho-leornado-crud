import {
  createFornecedorService,
  getFornecedoresService,
  getFornecedorByIdService,
  updateFornecedorService,
  deleteFornecedorService,
} from "../services/userService.js";

export async function createFornecedorController(req, res) {
  try {
    const result = await createFornecedorService(req.body);
    return res.status(201).json({ id: result.id });
  } catch (err) {
    const status = err.status || 500;
    return res.status(status).json({ error: err.message });
  }
}

export async function getFornecedoresController(req, res) {
  try {
    const rows = await getFornecedoresService();
    return res.status(200).json(rows);
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao listar fornecedores.' });
  }
}

export async function getFornecedorByIdController(req, res) {
  try {
    const id = req.params.id;
    const row = await getFornecedorByIdService(id);
    if (!row) return res.status(404).json({ error: 'Fornecedor não encontrado.' });
    return res.status(200).json(row);
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao buscar fornecedor.' });
  }
}

export async function updateFornecedorController(req, res) {
  try {
    const id = req.params.id;
    await updateFornecedorService(id, req.body);
    return res.status(200).json({ message: 'Fornecedor atualizado.' });
  } catch (err) {
    const status = err.status || 500;
    return res.status(status).json({ error: err.message });
  }
}

export async function deleteFornecedorController(req, res) {
  try {
    const id = req.params.id;
    await deleteFornecedorService(id);
    return res.status(200).json({ message: 'Fornecedor removido.' });
  } catch (err) {
    const status = err.status || 500;
    return res.status(status).json({ error: err.message });
  }
}