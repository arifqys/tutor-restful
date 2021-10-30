import mongoose from 'mongoose';

// Create schema
const Product = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
});

export default mongoose.model('Products', Product);