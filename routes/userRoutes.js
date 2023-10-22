import express from 'express'
import { authUser, registerUser } from '../controller/userController.js'

const router = express.Router()

router.route('/new').post(registerUser)
router.route('/auth').post(authUser)

export default router
