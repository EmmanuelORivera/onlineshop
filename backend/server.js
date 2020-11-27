const express = require('express');
const cors = require('cors');
const products = require('./data/products');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Get /home' });
});
app.get('/api/products', (req, res) => {
  res.json(products);
});
app.get('/api/products/:id', (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});
app.listen(5000, () => console.log('Server Running on Port 5000'));