import Database from 'better-sqlite3';
import path from 'path';

// Cria um banco local
const db = new Database(path.resolve('db.sqlite'));

db.pragma('journal_mode = WAL');

// Cria tabela se não existir
db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT,
    role TEXT
  )
`).run();

export default db;
