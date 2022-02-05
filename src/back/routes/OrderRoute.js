import express from 'express'
import orderController from '../controllers/OrderController'
import userController from '../controllers/UserController'

const router = express.Router()

router.route('/api/orders')
  .post(orderController.createOrder)
  .get(userController.requireSignin, orderController.readOrders)

router.route('/api/orders/:id')
  .get(orderController.readOrder)
  .put(orderController.updateOrder)

export default router