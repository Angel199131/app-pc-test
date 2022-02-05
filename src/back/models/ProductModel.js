import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name is required'
  },
  price: Number,
  image: {
    type: String
  }
})

export default mongoose.model('Product', ProductSchema)