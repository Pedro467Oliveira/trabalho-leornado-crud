import * as fornecedorRepo from '../repositories/userRepository.js';

export async function createFornecedorService(data) {
  const { cnpj, nome, email } = data;

  if (!cnpj || !nome || !email) {
    const err = new Error('Campos obrigatórios: cnpj, nome, email.');
    err.status = 400;
    throw err;
  }

  const existsCnpj = await fornecedorRepo.findFornecedorByCnpj(cnpj);
  if (existsCnpj) {
    const err = new Error('CNPJ já cadastrado.');
    err.status = 409;
    throw err;
  }

  const existsEmail = await fornecedorRepo.findFornecedorByEmail(email);
  if (existsEmail) {
    const err = new Error('Email já cadastrado.');
    err.status = 409;
    throw err;
  }

  return await fornecedorRepo.createFornecedor({ cnpj, nome, email });
}

export async function getFornecedoresService() {
  return await fornecedorRepo.findAllFornecedores();
}

export async function getFornecedorByIdService(id) {
  return await fornecedorRepo.findFornecedorById(id);
}

export async function updateFornecedorService(id, data) {
  const { cnpj, nome, email } = data;
  if (!cnpj || !nome || !email) {
    const err = new Error('Campos obrigatórios: cnpj, nome, email.');
    err.status = 400;
    throw err;
  }

  const existing = await fornecedorRepo.findFornecedorById(id);
  if (!existing) {
    const err = new Error('Fornecedor não encontrado.');
    err.status = 404;
    throw err;
  }

  // Check uniqueness for cnpj/email (exclude current)
  const byCnpj = await fornecedorRepo.findFornecedorByCnpj(cnpj);
  if (byCnpj && byCnpj.id !== Number(id)) {
    const err = new Error('CNPJ já cadastrado por outro fornecedor.');
    err.status = 409;
    throw err;
  }

  const byEmail = await fornecedorRepo.findFornecedorByEmail(email);
  if (byEmail && byEmail.id !== Number(id)) {
    const err = new Error('Email já cadastrado por outro fornecedor.');
    err.status = 409;
    throw err;
  }

  const changes = await fornecedorRepo.updateFornecedor(id, { cnpj, nome, email });
  return changes;
}

export async function deleteFornecedorService(id) {
  const existing = await fornecedorRepo.findFornecedorById(id);
  if (!existing) {
    const err = new Error('Fornecedor não encontrado.');
    err.status = 404;
    throw err;
  }
  const changes = await fornecedorRepo.deleteFornecedor(id);
  return changes;
}
