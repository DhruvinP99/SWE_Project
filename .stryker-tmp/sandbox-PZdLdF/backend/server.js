// @ts-nocheck
const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

// MySQL connection
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'YOUR_PASSWORD',
  database: 'budget_app',
};

async function getConnection() {
  return await mysql.createConnection(dbConfig);
}

// ----------------- Categories -----------------

app.get('/categories', async (req, res) => {
  const conn = await getConnection();
  const [rows] = await conn.query('SELECT * FROM categories');
  await conn.end();
  res.json(rows);
});

app.post('/categories', async (req, res) => {
  const { user_id, name, budget_amount, color, icon } = req.body;
  const conn = await getConnection();
  const [result] = await conn.query(
    'INSERT INTO categories (user_id, name, budget_amount, color, icon) VALUES (?, ?, ?, ?, ?)',
    [user_id, name, budget_amount, color || '#6366f1', icon || 'DollarSign']
  );
  const [row] = await conn.query('SELECT * FROM categories WHERE id = ?', [result.insertId]);
  await conn.end();
  res.json(row[0]);
});

app.put('/categories/:id', async (req, res) => {
  const { id } = req.params;
  const { budget_amount } = req.body;
  const conn = await getConnection();
  await conn.query('UPDATE categories SET budget_amount = ? WHERE id = ?', [budget_amount, id]);
  const [row] = await conn.query('SELECT * FROM categories WHERE id = ?', [id]);
  await conn.end();
  res.json(row[0]);
});

app.delete('/categories/:id', async (req, res) => {
  const { id } = req.params;
  const conn = await getConnection();
  await conn.query('DELETE FROM categories WHERE id = ?', [id]);
  await conn.end();
  res.json({ success: true });
});

// ----------------- Transactions -----------------

app.get('/transactions', async (req, res) => {
  const conn = await getConnection();
  const [rows] = await conn.query('SELECT * FROM transactions');
  await conn.end();
  res.json(rows);
});

app.post('/transactions', async (req, res) => {
  const { user_id, category_id, amount, description, transaction_date } = req.body;
  const conn = await getConnection();
  const [result] = await conn.query(
    'INSERT INTO transactions (user_id, category_id, amount, description, transaction_date) VALUES (?, ?, ?, ?, ?)',
    [user_id, category_id, amount, description, transaction_date || new Date()]
  );
  const [row] = await conn.query('SELECT * FROM transactions WHERE id = ?', [result.insertId]);
  await conn.end();
  res.json(row[0]);
});

app.delete('/transactions/:id', async (req, res) => {
  const { id } = req.params;
  const conn = await getConnection();
  await conn.query('DELETE FROM transactions WHERE id = ?', [id]);
  await conn.end();
  res.json({ success: true });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
