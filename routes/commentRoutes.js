import express from 'express'

import { protect } from '../middleware/auth.js'
import {
  createComment,
  deleteComment,
  getCommentById,
  updateComment,
} from '../controller/commentController.js'

const router = express.Router()

router.route('/new').post(protect, createComment)
router.route('/:id').get(getCommentById)
router.route('/update-comment/:id').put(updateComment)
router.route('/delete-comment/:id').delete(protect, deleteComment)

export default router
