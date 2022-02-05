import 'regenerator-runtime/runtime'

const createImage = async (image, token) => {
  let response = await fetch('/api/images', {
    method: 'POST',
    body: image,
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
  return response.json()
}

const readImages = async () => {

  let response = await fetch('/api/images', {
    method: 'GET'
  })
  return await response.json()

}

const deleteImage = async (image, token) => {

  let response = await fetch('/api/images/' + image, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
  return await response.json()

}

export {createImage, readImages, deleteImage}