import React from 'react'
import { useSelector } from 'react-redux'

const Navigation = () => {
  const user = useSelector((state) => state.user)
  const { userInfo } = user

  return (
    <div className='flex justify-between mt-4'>
      <h3 className='font-bold text-2xl'>Blogs</h3>
      <div className='flex gap-3 text-lg'>
        {userInfo !== null ? (
          <>
            <a href='/login'>Login</a>
            <a href='/signup'>Sign up</a>
          </>
        ) : (
          <a href='/'>Logout</a>
        )}
        <a href=''>Blogs</a>
      </div>
    </div>
  )
}

export default Navigation
