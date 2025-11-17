import { getDatabase } from '../config/db.js';

export async function createUser({ login, email, senha, foto }) {
  const db = await getDatabase();
  const sql = `INSERT INTO usuario (login, email, senha, foto) VALUES (?, ?, ?, ?)`;
  const result = await db.run(sql, [login, email, senha, foto]);
  await db.close();
  return { id: result.lastID };
}

export async function findUserByLogin(login) {
  const db = await getDatabase();
  const u = await db.get(`SELECT * FROM usuario WHERE login = ?`, [login]);
  await db.close();
  return u;
}

export async function findUserByEmail(email) {
  const db = await getDatabase();
  const u = await db.get(`SELECT * FROM usuario WHERE email = ?`, [email]);
  await db.close();
  return u;
}