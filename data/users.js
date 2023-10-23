import bcrypt from 'bcryptjs'

const users = [
  {
    username: 'jitali',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    date: 2023 - 10 - 23,
  },
  {
    username: 'john',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
    date: 2023 - 10 - 23,
  },
  {
    username: 'jane',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
    date: 2023 - 10 - 23,
  },
]

export default users
