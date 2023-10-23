import React from 'react'

const Login = () => {
  return (
    <div className='w-96 mx-auto mt-48'>
      <h3 className='font-medium text-xl my-4 text-center'>Sign Up</h3>
      <form action='' className='p-4 flex flex-col items-start'>
        <div className='flex flex-col w-fit my-2 mx-auto gap-2'>
          <label htmlFor=''>Username</label>
          <input
            type='text'
            className='rounded-sm border border-black px-3 py-1'
          />
        </div>
        <div className='flex flex-col w-fit my-2 mx-auto gap-2'>
          <label htmlFor=''>Email</label>
          <input
            type='email'
            className='rounded-sm border border-black px-3 py-1'
          />
        </div>
        <div className='flex flex-col w-fit my-2 mx-auto gap-2'>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            className='rounded-sm border border-black px-3 py-1'
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
