import Product from '../models/ProductModel'
import 'regenerator-runtime/runtime'

const readProducts = async (req, res) => {

  let products = await Product.find()
  res.json(products)

}

const createProduct = async (req, res) => {

  req.body.image = "/api/images/" + req.body.image
  const product = new Product(req.body)
  await product.save()
  res.json(product)

}


export default {readProducts, createProduct}