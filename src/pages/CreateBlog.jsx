import { useState } from 'react'
import { createBlog } from '../redux/action/blogAction'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
  const [title, setTitle] = useState()
  const [content, setContent] = useState()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(createBlog(title, content))
    navigate('/')
  }

  return (
    <div className='w-96 mx-auto mt-48'>
      <h3 className='font-medium text-xl my-4 text-center'>Create Blog</h3>
      <form
        action=''
        className='p-4 flex flex-col items-start'
        onSubmit={submitHandler}
      >
        <div className='flex flex-col w-fit my-2 mx-auto gap-2'>
          <label htmlFor=''>Title</label>
          <input
            type='text'
            className='rounded-sm border border-black px-3 py-1'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='flex flex-col w-fit my-2 mx-auto gap-2'>
          <label htmlFor=''>Content</label>
          <textarea
            type='text'
            className='rounded-sm border border-black px-3 py-1'
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className='bg-blue-300 px-4 py-2 w-fit mt-4 mx-auto rounded-md font-medium text-lg cursor-pointer'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreateBlog
