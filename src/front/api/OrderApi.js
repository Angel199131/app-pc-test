import 'regenerator-runtime/runtime'

const createOrder = async () => {

  let response = await fetch('/api/orders', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  return response.json()

}

const readOrder = async (params) => {

  let response = await fetch('/api/orders/' + params.id, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  return await response.json()

}

const readOrders = async (credentials) => {

  let response = await fetch('/api/orders', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials
    }
  })
  return await response.json()

}

const updateOrder = async (order) => {

  let response = await fetch('/api/orders/' + order._id, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order)
  })
  return await response.json()

}


export {createOrder,
        readOrder,
        readOrders,
        updateOrder}