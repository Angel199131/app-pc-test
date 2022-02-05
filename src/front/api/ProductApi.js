import 'regenerator-runtime/runtime'

const readProducts = async () => {

  let response = await fetch('/api/products/', {
    method: 'GET'
  })
  return await response.json()

}

const createProduct = async (product, token) => {
  let response = await fetch('/api/products', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(product)
  })
  return response.json()
}

const deleteProduct = async (product) => {

  let response = await fetch('/api/products/' + product._id, {
    method: 'DELETE'
  })
  return await response.json()

}

export {readProducts, createProduct, deleteProduct}