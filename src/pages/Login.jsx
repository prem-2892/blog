import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/action/userAction'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((state) => state.user)
  const { userInfo } = user

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(login(username, password))
  }

  useEffect(() => {
    if (userInfo != null && userInfo != undefined) {
      navigate('/')
    }
  }, [userInfo])

  return (
    <div className='w-96 mx-auto mt-48'>
      <h3 className='font-medium text-xl my-4 text-center'>Login</h3>
      <form
        action=''
        className='p-4 flex flex-col items-start'
        onSubmit={submitHandler}
      >
        <div className='flex flex-col w-fit my-2 mx-auto gap-2'>
          <label htmlFor=''>Username</label>
          <input
            type='text'
            className='rounded-sm border border-black px-3 py-1'
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className='flex flex-col w-fit my-2 mx-auto gap-2'>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            className='rounded-sm border border-black px-3 py-1'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='bg-blue-300 px-4 py-2 w-fit mt-4 mx-auto rounded-md font-medium text-lg cursor-pointer'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
