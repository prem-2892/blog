import asyncHandler from 'express-async-handler'
import User from '../models/user.js'
import generateToken from '../config/generateToken.js'

// Create User
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, date } = req.body

  const existingUser = await User.findOne({ username: username })

  if (existingUser) {
    res.status(406)
    throw new Error('User Alredy exists!')
  }

  //   code below only executes if this above condition fails
  const newUser = await User.create({
    username,
    email,
    password,
    date,
  })

  if (newUser) {
    res.status(201)
    res.json({ message: 'User successfully registered' })
  }
})

// User Authentication
const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({ username })

  if (user) {
    if (await user.matchPassword(password)) {
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        date: user.date,
        token: generateToken(user._id),
      })
    } else {
      res.status(401)
      throw new Error('Incorrect Password!')
    }
  } else {
    res.status(401)
    throw new Error('No User Exists!')
  }
})

export { registerUser, authUser }
