import express from 'express'

import { protect } from '../middleware/auth.js'
import {
  createComment,
  deleteComment,
  getCommentByBlog,
  updateComment,
} from '../controller/commentController.js'

const router = express.Router()

router.route('/new').post(protect, createComment)
router.route('/:id').get(getCommentByBlog)
router.route('/update/:id').put(protect, updateComment)
router.route('/delete/:id').delete(protect, deleteComment)

export default router
