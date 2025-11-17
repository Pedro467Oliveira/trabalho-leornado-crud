import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import fs from 'fs';
import path from 'path';

const DB_FILE = path.resolve('database.sqlite3');
const MIGRATION = path.resolve('migrations/create_usuario_table.sql');

export async function getDatabase() {
  const db = await open({ filename: DB_FILE, driver: sqlite3.Database });
  const sql = fs.readFileSync(MIGRATION, 'utf8');
  await db.exec(sql);
  return db;
}