import asyncHandler from 'express-async-handler'
import Comment from '../models/comment.js'

// Create Comment
const createComment = asyncHandler(async (req, res) => {
  const { text, creationDate, blog } = req.body

  const newComment = await Comment.create({
    user: req.user.id,
    text,
    creationDate,
    blog,
  })

  if (newComment) {
    res.status(201)
    res.json({ message: 'Comment successfully created' })
  }
})

// Read Comment
const getCommentByBlog = asyncHandler(async (req, res) => {
  const comment = await Comment.find({ blog: req.params.id })
    .populate('user', 'username')
    .populate('blog', 'title')
  res.json(comment)
})

// Update Comment
const updateComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id)

  if (!comment) {
    res.status(404)
    throw new Error('Comment not found')
  }

  if (comment.user != req.user.id) {
    res.status(401)
    throw new Error('Not authorized to update this comment')
  }

  const updatedComment = {
    user: req.body.user || comment.user,
    text: req.body.text || comment.text,
    creationDate: req.body.creationDate || comment.creationDate,
    blog: req.body.blog || comment.blog,
  }

  const newComment = await Comment.findByIdAndUpdate(
    req.params.id,
    updatedComment
  )
  res.json(newComment)
})

// Delete Comment
const deleteComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id)

  if (!comment) {
    res.status(404)
    throw new Error('Comment not found')
  }

  if (comment.user != req.user.id) {
    res.status(401)
    throw new Error('Not authorized to delete this comment')
  }

  const deletedComment = await Comment.findByIdAndDelete(req.params.id)

  if (!deletedComment) {
    res.status(500)
    throw new Error('Failed to delete the comment')
  }

  res.json({ message: 'Comment successfully deleted' })
})

export { createComment, getCommentByBlog, updateComment, deleteComment }
