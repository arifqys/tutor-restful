import express from 'express';
import mongoose from 'mongoose';
import Product from './models/Product.js';

const app = express();
const PORT = 8080;

mongoose.connect('mongodb://localhost:27017/product');

const db = mongoose.connection;
db.on('open', () => console.log('Database connected'));
db.on('error', (err) => console.log(err));

// middleware
app.use(express.json());

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
})

// app.get('/', (req, res) => {
//   res.send('Hello')
// })

// app.post('/', (req, res) => {
//   const { name } = req.body;

//   res.send({
//     message: `${name} created`
//   })
// })

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch(err) {
    res.status(500).json({message: error.message});
  }

})

app.post('/products', async (req, res) => {
  const product = new Product(req.body)

  try {
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch(err) {
    res.status(500).json({message: err.message});
  }
})