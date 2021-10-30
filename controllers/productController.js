import Product from '../models/Product.js';

const getProducts = async(req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch(err) {
    res.status(500).json({message: error.message});
  }
};

const saveProduct = async(req, res) => {
  const product = new Product(req.body)

  try {
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch(err) {
    res.status(500).json({message: err.message});
  }
};

const updateProduct = async(req, res) => {
  const checkId = await Product.findById(req.params.id);
  if (!checkId) {
     return res.status(404).json({message: "Product not found"});
  }

  try {
    const updatedProduct = await Product.updateOne({_id: req.params.id}, {$set: req.body});
    res.status(200).json(updatedProduct);
  } catch(err) {
    res.status(400).json({message: err.message});
  }
};

const deleteProduct = async(req, res) => {
  const checkId = await Product.findById(req.params.id);
  if (!checkId) {
     return res.status(404).json({message: "Product not found"});
  }

  try {
    const deletedProduct = await Product.deleteOne({_id: req.params.id});
    res.status(200).json(deletedProduct);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

export { getProducts, saveProduct, updateProduct, deleteProduct };