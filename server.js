import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import connectDB from './config/db.js'

// Custom error handling
import { notFound, errorHandler } from './middleware/error.js'

// routes
import userRoutes from './routes/userRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import commentRoutes from './routes/commentRoutes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.get('/', (req, res) => {
  res.send('SERVER is live')
})

app.use('/users', userRoutes)
app.use('/blogs', blogRoutes)
app.use('/comments', commentRoutes)

// for handling all 404 ERRORS
app.use(notFound)

// Custom middleware with ERROR handler
app.use(errorHandler)

app.listen(
  process.env.PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  )
)
