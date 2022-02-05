import express from 'express'
import productController from '../controllers/ProductController'
import userController from '../controllers/UserController'

const router = express.Router()

router.route('/api/products')
  .get(productController.readProducts)
  .post(userController.requireSignin, productController.createProduct)

export default router