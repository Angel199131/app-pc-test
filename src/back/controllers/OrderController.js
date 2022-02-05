import Order from '../models/OrderModel'

const createOrder = async (req, res) => {

  const order = new Order()
  await order.save()

  res.json(order)

}


const readOrder = async (req, res) => {

  const order = await Order.findById(req.params.id);
  res.json(order);

}

const readOrders = async (req, res) => {

  const orders = await Order.find();
  res.json(orders);

}

const updateOrder = async (req, res) => {

  var order = await Order.findOne({ _id: req.params.id})

  order.address = req.body.address

  order.phone = req.body.phone

  order.quantity = req.body.quantity

  order.price = req.body.price

  order.checked = req.body.checked

  order.product = req.body.product

  await order.save()

  res.json(order)

}

export default {createOrder, 
                readOrder, 
                readOrders, 
                updateOrder}