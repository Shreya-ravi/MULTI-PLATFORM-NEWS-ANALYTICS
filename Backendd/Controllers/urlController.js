const db = require('../db'); // Make sure this points to your DB connection file

exports.shortenUrl = (req, res) => {
  const { original_url } = req.body;

  if (!original_url) {
    return res.status(400).json({ message: 'Original URL is required' });
  }

  // Generate a simple short code (you can improve this)
  const short_url = Math.random().toString(36).substring(2, 8);

  const insertQuery = 'INSERT INTO urls (original_url, short_url) VALUES (?, ?)';
  db.query(insertQuery, [original_url, short_url], (err, result) => {
    if (err) return res.status(500).json({ error: err });

    res.json({ short_url });
  });
};

exports.trackClick = (req, res) => {
  const { short_url } = req.params;

  // Find URL by short_url
  const findUrlQuery = 'SELECT id, original_url FROM urls WHERE short_url = ?';
  db.query(findUrlQuery, [short_url], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'URL not found' });

    const url = results[0];

    // Get client IP and User Agent
    const ip_address = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.ip || '';
    const user_agent = req.headers['user-agent'] || '';

    // Insert click record
    const insertClickQuery = 'INSERT INTO clicks (url_id, ip_address, user_agent) VALUES (?, ?, ?)';
    db.query(insertClickQuery, [url.id, ip_address, user_agent], (err2) => {
      if (err2) return res.status(500).json({ error: err2 });

      // Redirect user to original URL
      res.redirect(url.original_url);
    });
  });
};

