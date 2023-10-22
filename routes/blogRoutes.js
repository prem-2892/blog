import express from 'express'
import {
  createBlog,
  deleteBlog,
  getBlogById,
  getBlogs,
  updateBlog,
} from '../controller/blogController.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

router.route('/new').post(protect, createBlog)
router.route('/:id').get(getBlogById)
router.route('/update/:id').put(updateBlog)
router.route('/delete/:id').delete(protect, deleteBlog)
router.route('/all').get(getBlogs)

export default router
