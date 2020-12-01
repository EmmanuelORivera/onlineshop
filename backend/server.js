import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';
dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Get /home' });
});

app.use('/api/products', productRoutes);

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.staus(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server Running in ${process.env.NODE_ENV} on Port ${PORT}`)
);
