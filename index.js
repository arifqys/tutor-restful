import express from 'express';
import mongoose from 'mongoose';
import productsRoute from './routes/products.js';

const app = express();
const PORT = 8080;

mongoose.connect('mongodb://localhost:27017/product');

const db = mongoose.connection;
db.on('open', () => console.log('Database connected'));
db.on('error', (err) => console.log(err));

// middleware
app.use(express.json());

app.use('/products', productsRoute);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
})