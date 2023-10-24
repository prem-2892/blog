import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/action/userAction'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
  const user = useSelector((state) => state.user)
  const { userInfo } = user

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = (e) => {
    e.preventDefault()

    dispatch(logout())
    navigate('/')
  }

  return (
    <div className='flex justify-between mt-4'>
      <h3
        className='font-bold text-2xl cursor-pointer'
        onClick={(e) => navigate('/')}
      >
        Blogs
      </h3>
      <div className='flex gap-3 text-lg'>
        {userInfo == null || userInfo == undefined ? (
          <>
            <a href='/login'>Login</a>
            <a href='/signup'>Sign up</a>
          </>
        ) : (
          <button onClick={(e) => handleLogout(e)}>Logout</button>
        )}
        <a href=''>Blogs</a>
      </div>
    </div>
  )
}

export default Navigation
