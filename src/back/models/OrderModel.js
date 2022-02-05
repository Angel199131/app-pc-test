import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
  phone: {
    type: String
  },
  product: [{
    name: String,
    quantity: Number,
    price: Number,
    image: String
  }],
  quantity: {
    type: Number
  },
  price: Number,
  address: String,
  checked: Boolean
})

export default mongoose.model('Order', OrderSchema)