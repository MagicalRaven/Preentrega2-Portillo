const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  const products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'));
  res.render('home', { products });
});

router.get('/realtimeproducts', (req, res) => {
  res.render('realTimeProducts');
});

module.exports = router;
