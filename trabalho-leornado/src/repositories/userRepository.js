import { getDatabase } from '../config/db.js';

export async function createFornecedor({ cnpj, nome, email }) {
  const db = await getDatabase();
  const sql = `INSERT INTO fornecedor (cnpj, nome, email) VALUES (?, ?, ?)`;
  const result = await db.run(sql, [cnpj, nome, email]);
  await db.close();
  return { id: result.lastID };
}

export async function findFornecedorByCnpj(cnpj) {
  const db = await getDatabase();
  const r = await db.get(`SELECT * FROM fornecedor WHERE cnpj = ?`, [cnpj]);
  await db.close();
  return r;
}

export async function findFornecedorByEmail(email) {
  const db = await getDatabase();
  const r = await db.get(`SELECT * FROM fornecedor WHERE email = ?`, [email]);
  await db.close();
  return r;
}

export async function findAllFornecedores() {
  const db = await getDatabase();
  const rows = await db.all("SELECT * FROM fornecedor");
  await db.close();
  return rows;
}

export async function findFornecedorById(id) {
  const db = await getDatabase();
  const r = await db.get(`SELECT * FROM fornecedor WHERE id = ?`, [id]);
  await db.close();
  return r;
}

export async function updateFornecedor(id, { cnpj, nome, email }) {
  const db = await getDatabase();
  const sql = `UPDATE fornecedor SET cnpj = ?, nome = ?, email = ? WHERE id = ?`;
  const result = await db.run(sql, [cnpj, nome, email, id]);
  await db.close();
  return result.changes;
}

export async function deleteFornecedor(id) {
  const db = await getDatabase();
  const result = await db.run(`DELETE FROM fornecedor WHERE id = ?`, [id]);
  await db.close();
  return result.changes;
}
