import asyncHandler from 'express-async-handler'
import Blog from '../models/blog.js'

// @desc   Register New User
// @Route  POST /api/users
// @access Public

// Create Blog
const createBlog = asyncHandler(async (req, res) => {
  const { title, content, creationDate, tags } = req.body

  const existingBlog = await Blog.findOne({ title: title })

  if (existingBlog) {
    res.status(406)
    throw new Error('Blog Alredy exists!')
  }

  //   code below only executes if this above condition fails
  const newBlog = await Blog.create({
    title,
    content,
    author: req.user.id,
    creationDate,
    tags,
  })

  if (newBlog) {
    res.status(201)
    res.json({ message: 'Blog successfully created' })
  }
})

// Read Blog
const getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id)
  res.json(blog)
})

// Update Blog
const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id)

  if (!blog) {
    res.status(404)
    throw new Error('Blog not found')
  }

  if (blog.author != req.user.id) {
    res.status(401)
    throw new Error('Not authorized to update this blog')
  }

  const updatedBlog = {
    title: req.body.title || blog.title,
    content: req.body.content || blog.content,
    creationDate: req.body.creationDate || blog.creationDate,
    tags: req.body.tags || blog.tags,
  }

  if (!updatedBlog) {
    res.status(500)
    throw new Error('Failed to update the blog')
  }

  const newBlog = await Blog.findByIdAndUpdate(req.params.id, updatedBlog)
  res.json(newBlog)
})

// Delete Blog
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id)

  if (!blog) {
    res.status(404)
    throw new Error('Blog not found')
  }

  if (blog.author != req.user.id) {
    res.status(401)
    throw new Error('Not authorized to delete this blog')
  }

  const deletedBlog = await Blog.findByIdAndDelete(req.params.id)

  if (!deletedBlog) {
    res.status(500)
    throw new Error('Failed to delete the blog')
  }

  res.json({ message: 'Blog successfully deleted' })
})

// Show All Blogs
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({})

  res.json(blogs)
})

export { createBlog, getBlogById, updateBlog, deleteBlog, getBlogs }
