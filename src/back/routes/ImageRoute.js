import express from 'express'
import imageController from '../controllers/ImageController'
import userController from '../controllers/UserController'


const router = express.Router()

router.route('/api/images/:id')
  .get(imageController.readImage)
  .delete(userController.requireSignin, imageController.deleteImage)

  
router.route('/api/images')
  .post(userController.requireSignin, imageController.uploadImage, imageController.createImage)
  .get(imageController.readImages)

  
export default router