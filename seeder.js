import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import blogs from './data/blogs.js'
import comments from './data/comments.js'
import User from './models/user.js'
import Blog from './models/blog.js'
import Comment from './models/comment.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Blog.deleteMany()
    await Comment.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const newBlogs = blogs.map((blog) => {
      return { ...blog, author: createdUsers[0]._id }
    })

    const createdBlogs = await Blog.insertMany(newBlogs)

    const newComments = comments.map((comment) => {
      return {
        ...comment,
        user: createdUsers[0]._id,
        blog: createdBlogs[0]._id,
      }
    })
    await Comment.insertMany(newComments)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Blog.deleteMany()
    await Comment.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
