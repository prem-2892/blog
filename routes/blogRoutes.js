import express from 'express'
import {
  createBlog,
  deleteBlog,
  getBlogById,
  getBlogByUser,
  getBlogs,
  updateBlog,
} from '../controller/blogController.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

router.route('/new').post(protect, createBlog)
router.route('/all').get(getBlogs)
router.route('/my').get(protect, getBlogByUser)
router.route('/:id').get(getBlogById)
router.route('/update/:id').put(protect, updateBlog)
router.route('/delete/:id').delete(protect, deleteBlog)

export default router
