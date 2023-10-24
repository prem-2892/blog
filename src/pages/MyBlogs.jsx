import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBlog, listUserBlogs } from '../redux/action/blogAction'
import { useNavigate } from 'react-router-dom'

const MyBlogs = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const blogUser = useSelector((state) => state.blogUser)
  const { userBlogs } = blogUser

  useEffect(() => {
    if (userBlogs == undefined || userBlogs.length == 0) {
      dispatch(listUserBlogs())
    }
  }, [dispatch, userBlogs])

  const handleDelete = (e, id) => {
    e.preventDefault()

    dispatch(deleteBlog(id))
    dispatch(listUserBlogs())
  }

  return (
    <div>
      <h3 className='text-xl font-bold'>My Blogs</h3>
      <div className='flex flex-wrap gap-3 my-3'>
        {userBlogs &&
          userBlogs.map((blog) => (
            <div
              className='border border-black p-3 rounded-md max-w-sm'
              key={blog._id}
            >
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <div className='flex gap-3'>
                <button
                  className='bg-blue-300 px-3 py-1 mt-3  rounded-md cursor-pointer'
                  onClick={(e) => navigate(`/blogs/edit/${blog._id}`)}
                >
                  Edit
                </button>
                <button
                  className='bg-red-300 px-3 py-1 mt-3  rounded-md cursor-pointer'
                  onClick={(e) => handleDelete(e, blog._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default MyBlogs
