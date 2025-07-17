const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// Route: Get total clicks by platform
app.get('/clicks', (req, res) => {
  const query = `
    SELECT platform, COUNT(*) as clicks 
    FROM url_shortener 
    GROUP BY platform
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Database error');
    }
    res.json(results);
  });
});

// Optional: root test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start server (✅ Only once!)
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
app.get("/api/urls", (req, res) => {
  const query = `SELECT * FROM urls_tracker`;
  db.query(query, (err, results) => {
    if (err) {
      console.error("DB error", err);
      return res.status(500).json({ error: "DB error" });
    }
    res.json(results);
  });
});
