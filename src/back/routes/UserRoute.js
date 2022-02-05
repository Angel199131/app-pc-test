import express from 'express'
import userController from '../controllers/UserController'

const router = express.Router()

router.route('/api/sign-in')
.post(userController.signIn)

router.route('/api/user')
.post(userController.createUser)

export default router