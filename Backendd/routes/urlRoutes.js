const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

// Route to shorten URL
router.post('/shorten', urlController.shortenUrl);

// Route to redirect and track clicks
router.get('/:short_url', urlController.trackClick);

module.exports = router;
